import django
from django.contrib.auth import get_user_model
from users.models import Employee, Department
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django import forms
from django.core import validators
from django.utils import timezone
from django.db.models import Q
import time
class RegistrationForm (UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Username'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-control','placeholder':'Valid Email is required'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control', 'placeholder':'Password'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control', 'placeholder':'Confirm Password'}))
    class Meta:
        model = get_user_model()
        fields = ('username','email','password1', 'password2')

class LoginForm(AuthenticationForm):
   username = forms.CharField(widget=forms.TextInput(attrs={'autofocus':True, 'placeholder':'Username Here', 'class':'form-control'}))
   password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control', 'placeholder':'********'}))

class EmployeeForm (forms.ModelForm):
    thumb = forms.ImageField(widget=forms.ClearableFileInput(attrs={'class':'form-control'}))
    first_name = forms.CharField(strip=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'First Name'}))
    last_name = forms.CharField(strip=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Last Name'}))
    mobile = forms.CharField(strip=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Mobile Number'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-control','placeholder':'Valid Email'}))
    emergency = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Emergency Mobile Number'}))
    gender = forms.ChoiceField(choices=Employee.GENDER,widget=forms.Select(attrs={'class':'form-control'}))
    language = forms.ChoiceField(choices=Employee.LANGUAGE,widget=forms.Select(attrs={'class':'form-control'}))
    phases=forms.ChoiceField(choices=Employee.PHASES,widget=forms.Select(attrs={'class':'form-control'}))
    age=forms.CharField(strip=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Age'}))
    geography=forms.CharField(strip=True, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'geography'}))
    department = forms.ModelChoiceField(Department.objects.all(), required=True, empty_label='Select a department',widget=forms.Select(attrs={'class': 'form-control'}))
    class Meta:
        model = Employee
        fields = ('first_name', 'last_name', 'mobile','email','emergency','salary','gender','department','bank','language','thumb')
        widgets={
            'salary':forms.TextInput(attrs={'class':'form-control'}),
            'bank':forms.TextInput(attrs={'class':'form-control'})}

class DepartmentForm(forms.ModelForm):
    name = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Department Name'}))
    class Meta:
        model = Department
        fields = '__all__'