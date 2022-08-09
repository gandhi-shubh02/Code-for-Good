from django.db import models
from django.utils import timezone


class Retire(models.Model):
    retire_date = models.DateField(default=timezone.now)
    email = models.EmailField(max_length=125, null=False)

    def __str__(self):
        return self.name

class Leave(models.Model):
    leave_date = models.DateField(default=timezone.now)
    email = models.EmailField(max_length=125, null=False)
    reason = models.TextField(max_length=100, default='')

    def __str__(self):
        return self.name
