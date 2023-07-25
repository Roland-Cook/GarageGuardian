from django.views.decorators.http import require_http_methods
from .encoders import (
    SalespersonEncoder,
    CustomerEncoder,
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


@require_http_methods(["GET", "DELETE"])
def api_customer_detail(request, id):
    if request.method == "DELETE":
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
        print(content)
        try:
            print("Now we try")
            automobile_vin = content["automobile"]
            print(automobile_vin)
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            print(automobile)
            content["automobile"] = automobile
            print(automobile_vin, automobile)

            salesperson_id = content["salesperson"]
            print(salesperson_id)
            salesperson = Salesperson.objects.get(id=salesperson_id)
            print(salesperson)
            content["salesperson"] = salesperson

            customer_id = content["customer"]
            print(customer_id)
            customer = Customer.objects.get(id=customer_id)
            print(customer)
            content["customer"] = customer

            sale = Sale.objects.create(**content)
            print(sale)

            automobile.sold = True
            print(automobile.sold)
            automobile.save()

            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "No known Automobile with VIN"},
                status=400
                )

        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "No known salesperson"},
                status=400
            )

        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "No known customer"},
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
