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
    properties = ["vin","sold","id"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name","last_name","employee_id","id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date","time","reason", "vin", "customer", "technician","id","status"
    ]
    def get_extra_data(self, o):
        return { "technician": o.technician.first_name,"status": o.status.name}

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
            {"message": "Cannot Create Technician"},
            status=400,
            )
        

@require_http_methods(["GET", "DELETE"])
def api_tech_detail(request, id):
    if request.method == "GET":
        try:  
            tech = Technician.objects.get(id=id)
            return JsonResponse(
                tech,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
                return JsonResponse(
                {"message": "Cannot find technician"},
                status=400
            )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_appointments(request):
        if request.method == "GET":
            try:
                appointments = Appointment.objects.all()
                return JsonResponse(
                {"appointments":appointments},
                encoder=AppointmentEncoder,
                safe=False
                )
            except Appointment.DoesNotExist:
                return JsonResponse(
                {"message": "Cannot find Appointments"},
                status=404
            )
        else:
            content = json.loads(request.body)
            try:
                technician = Technician.objects.get(first_name=content["technician"])
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                {"message": "Cannot Find technician"},
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
        try:
            app = Appointment.objects.get(id=id)
            return JsonResponse(
                app,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
                return JsonResponse(
                {"message": "No appointment found"},
                status=400
            )
    else:
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["PUT"])
def api_cancel(request,id):
    try:
        app = Appointment.objects.get(id=id)
        app.cancelled()
        return JsonResponse(
            app,
            encoder=AppointmentEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot change status to cancelled"},
                status=400
            )


@require_http_methods(["PUT"])
def api_finished(request,id):
    try:
        app = Appointment.objects.get(id=id)
        app.finished()
        return JsonResponse(
            app,
            encoder=AppointmentEncoder,
            safe=False
        )
    except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Cannot change status to finished"},
                status=400
            )
