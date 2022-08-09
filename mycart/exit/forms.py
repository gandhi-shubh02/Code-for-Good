import django
from django.contrib.auth import get_user_model
from users.models import Employee, Department
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django import forms
from django.core import validators
from django.utils import timezone
from django.db.models import Q
import time


class RetireForm (forms.ModelForm):
    email = forms.EmailField()
    retire_date=forms.DateField()

class LeaveForm (forms.ModelForm):
    email = forms.EmailField()
    leave_date=forms.DateField()
    reason=forms.CharField()

