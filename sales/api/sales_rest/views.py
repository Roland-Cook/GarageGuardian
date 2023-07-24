from django.views.decorators.http import require_http_methods
from .encoders import (
    SalespersonEncoder,
    CustomerEncoder,
    AutomobileVOEncoder,
    SaleEncoder,
)
from .models import Salesperson, AutomobileVO, Customer, Sale
from django.http import JsonResponse
import json
# Create your views here.


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):

    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.all()
            return JsonResponse(
                {"salesperson": salesperson},
                encoder=SalespersonEncoder
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot find salesperson"}
            )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "No known Salesperson"},
                status=400
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_salesperson_detail(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
    else:
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        try:
            customer = Customer.objects.all()
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerEncoder
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot find salesperson"}
            )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "No known customer"},
                status=400
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_customer_detail(request, id):
    if request.method == "GET":
        salesperson = Customer.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        try:
            sale = Sale.objects.all()
            return JsonResponse(
                {"sale": sale},
                encoder=SaleEncoder
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot find Sale data"}
            )
    else:
        content = json.loads(request.body)
        try:

            sale = Sale.objects.create(**content)
            sale.save()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "No known Sale"},
                status=400
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_sale_detail(request, id):
    if request.method == "GET":
        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
