from django.shortcuts import render, HttpResponse, redirect
from exit.models import Leave
from exit.models import Retire
from django.contrib import messages
from exit.forms import LeaveForm, RetireForm
from users.forms import EmployeeForm
from exit import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


def retire(request):
    if request.method == 'POST':
        form=RetireForm(request.POST or None)
        employee_form=EmployeeForm(request.POST or None)
        if form.is_valid() and employee_form.is_valid():
            is_retired=True
            form.save()
            employee_form.save()
            redirect('retire')
    return render(request, 'retire')

def leave(request):
    if request.method == 'POST':
        form=LeaveForm(request.POST or None)
        employee_form=EmployeeForm(request.POST or None)
        if form.is_valid() and employee_form.is_valid():
            is_leave=True
            form.save()
            employee_form.save()
            redirect('leave')
    return render(request, 'leave')

