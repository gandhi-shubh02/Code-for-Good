import django_filters
from users.models import Employee
from django_filters import CharFilter

class EmployeeFilter(django_filters.FilterSet):
    age = CharFilter(field_name = 'age', lookup_expr='icontains')
    
    class Meta:
        model = Employee
        fields = ['first_name']