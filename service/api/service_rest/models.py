from django.db import models
from datetime import datetime
# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField()


class Status(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    



class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class Appointment(models.Model):

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="submitted")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment 


    date = models.DateField(blank=False, null=True)
    time = models.TimeField(null=True)
    reason = models.TextField()
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    
    technician = models.ForeignKey(
        Technician,
        related_name="technican",
        on_delete=models.CASCADE
    )

    status = models.ForeignKey(
        Status,
        related_name="appointment",
        on_delete=models.PROTECT,
    )



    def cancelled(self):
        status = Status.objects.get(name="cancelled")
        self.status = status
        self.save()

    def finished(self):
        status = Status.objects.get(name="finished")
        self.status = status
        self.save()
