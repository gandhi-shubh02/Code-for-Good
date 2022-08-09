from django.contrib import admin
from users import models

# Register your models here.
admin.site.register(models.Department)
admin.site.register(models.Employee)
