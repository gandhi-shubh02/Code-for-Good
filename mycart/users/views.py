from users.serializers import DepartmentSerializer
from users.serializers import EmployeeSerializer
from rest_framework.generics import ListAPIView
from rest_framework import status
from django.shortcuts import render,redirect, resolve_url,reverse, get_object_or_404
from django.urls import reverse_lazy
from django.contrib.auth import get_user_model
from users.models  import Employee, Department
from django.contrib.auth.views import LoginView
from django.contrib.auth import logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import FormView, CreateView,View,DetailView,TemplateView,ListView,UpdateView,DeleteView
from users.forms import EmployeeForm,DepartmentForm,LoginForm,RegistrationForm
from django.core.exceptions import ObjectDoesNotExist
from django.contrib import messages
from django.utils import timezone
from django.db.models import Q
from users import filters
import csv
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from users import serializers
from rest_framework import viewsets



# Create your views here.
class Index(TemplateView):
    template_name = 'CFG/home/home.html'


#   Authentication
class Register(CreateView):
    model = get_user_model()
    form_class = RegistrationForm
    template_name = 'CFG/registrations/register.html'
    success_url = reverse_lazy('CFG:login')


class Login_View(LoginView):
    model = get_user_model()
    form_class = LoginForm
    template_name = 'CFG/registrations/login.html'

    def get_success_url(self):
        url = resolve_url('CFG:dashboard')
        return url


class Logout_View(View):

    def get(self, request):
        logout(self.request)
        return redirect('CFG:login', permanent=True)


class Employee_New(LoginRequiredMixin, CreateView):
    model = Employee
    form_class = EmployeeForm
    template_name = 'CFG/employee/create.html'
    login_url = 'CFG:login'
    redirect_field_name = 'redirect:'


class Employee_All(LoginRequiredMixin, ListView):
    template_name = 'CFG/employee/index.html'
    model = Employee
    login_url = 'CFG:login'
    context_object_name = 'employees'
    paginate_by = 5

class Employee_View(LoginRequiredMixin, DetailView):
    department = Employee.objects.select_related('department')
    template_name = 'CFG/employee/single.html'
    context_object_name = 'employee'
    login_url = 'CFG:login'
    # myFilter = filters.EmployeeFilter(request.GET , queryset=department)
    # department = myFilter.qs


class Employee_Update(LoginRequiredMixin, UpdateView):
    model = Employee
    template_name = 'CFG/employee/edit.html'
    form_class = EmployeeForm
    login_url = 'CFG:login'


class Employee_Delete(LoginRequiredMixin, DeleteView):
    pass

class Department_New (LoginRequiredMixin,CreateView):
    model = Department
    template_name = 'CFG/department/create.html'
    form_class = DepartmentForm
    login_url = 'CFG:login'

class Department_Update(LoginRequiredMixin,UpdateView):
    model = Department
    template_name = 'CFG/department/edit.html'
    form_class = DepartmentForm
    login_url = 'CFG:login'
    success_url = reverse_lazy('CFG:dashboard')

class EmployeeView(APIView):
    serializer_class = serializers.EmployeeSerializer
    def get(self, request, format=None):
        # returns a list of API view features
        an_apiview=[
            'similar to django view',
            'mapped manually to urls',
        ]

        return Response({'message': 'Hello','an_apiview':an_apiview})

    def post(self, request):
        # creates a message with name passed in serializer
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get('email')
            message=f'hello {email}'
            # f string functionality to insert string
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )


class EmployeeList(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class DepartmentList(ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

def chartdata(request):
    with open('csvfile',encoding='utf-8-sig') as csvfile:
        reader=csv.reader(csvfile)
        data=[]
        for row in reader:
            data.append([row])

    finaldata=json.dumps(data)
    return render(request,"#.html",{'values':finaldata})

