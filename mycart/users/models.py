from django.db import models
import random
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import AbstractUser


class Department(models.Model):
    name = models.CharField(max_length=70, null=False, blank=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("CFG:dept_detail", kwargs={"pk": self.pk})


class Employee(models.Model):
    LANGUAGE = (('english', 'ENGLISH'), ('hindi', 'HINDI') )
    GENDER = (('male', 'MALE'), ('female', 'FEMALE'), ('other', 'OTHER'))
    PHASES=(('on-hold', 'ON-HOLD'), ('active', 'ACTIVE'), ('resigned', 'RESIGNED'))
    lefret=(('True'),('False'))
    is_retired=models.BooleanField(default=False)
    is_left=models.BooleanField(default=False)
    emp_id = models.CharField(max_length=70, default='emp' + str(random.randrange(100, 999, 1)))
    thumb = models.ImageField(blank=True, null=True)
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    mobile = models.CharField(max_length=15)
    email = models.EmailField(max_length=125, null=False)
    address = models.TextField(max_length=100, default='')
    emergency = models.CharField(max_length=11)
    gender = models.CharField(choices=GENDER, max_length=10)
    joined = models.DateTimeField(default=timezone.now)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    language = models.CharField(choices=LANGUAGE, max_length=10, default='english')
    accountno = models.CharField(max_length=10, default='0123456789')
    bank = models.CharField(max_length=25, default='SBI')
    salary = models.CharField(max_length=16, default='00,000.00')
    age=models.CharField(max_length=99,null=True)
    phases=models.CharField(choices=PHASES,max_length=10)
    def __str__(self):
        return self.first_name + '-' + self.last_name

    def get_absolute_url(self):
        return reverse("CFG:employee_view", kwargs={"pk": self.pk})



