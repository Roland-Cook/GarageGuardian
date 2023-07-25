from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Technician, Appointment, AutomobileVO
from common.json import ModelEncoder
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods


# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin","sold"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name","last_name","employee_id"]



class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time", "reason", "vin", "customer", "technician","status"
    ]
    def get_extra_data(self, o):
        return { "technician": o.technician.first_name, "status":o.status.name}

    encoders = {
        "technician": TechnicianEncoder()
        }
    


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            tech = Technician.objects.create(**content)
            tech.save()
            return JsonResponse(
            tech,
            encoder=TechnicianEncoder,
            safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
            {"message": "Invalid technician"},
            status=400,
            )
        

@require_http_methods(["GET", "DELETE"])
def api_tech_detail(request, id):
    if request.method == "GET":
        tech = Technician.objects.get(id=id)
        return JsonResponse(
            tech,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


def api_appointments(request):
        if request.method == "GET":
            appointment = Appointment.objects.all()
            return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
            )
        else:
            content = json.loads(request.body)

            try:
                technician = Technician.objects.get(first_name=content["technician"])
                content["technician"] = technician
            except Appointment.DoesNotExist:
                return JsonResponse(
                {"message": "Invalid technician"},
                status=400,
                )

            appointment = Appointment.create(**content)
            return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
            )



@require_http_methods(["GET", "DELETE"])
def api_appointment_details(request, id):
    if request.method == "GET":
        app = Appointment.objects.get(id=id)
        return JsonResponse(
            app,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})



def api_cancel(request,id):
    app = Appointment.objects.get(id=id)
    app.cancelled()

def api_finished(request,id):
    app = Appointment.objects.get(id=id)
    app.finished()
