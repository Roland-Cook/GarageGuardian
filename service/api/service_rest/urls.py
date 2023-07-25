from django.urls import path
from .views import api_technicians, api_tech_detail, api_appointments, api_appointment_details, api_cancel, api_finished

urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:id>", api_tech_detail, name="api_tech_detail"),
    path("appointments/",api_appointments, name="api_appointments"),
    path("appointments/<int:id>",api_appointment_details, name="api_appointment_details"),
    path("appointments/<int:id>/cancel", api_cancel, name="api_cancel"),
    path("appointments/<int:id>/finish", api_finished, name="api_finish")
]
