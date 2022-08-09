from django.urls import path
from users import views
urlpatterns=[

path('', views.Index.as_view(), name='index'),
path('register/', views.Register.as_view(), name='reg'),
path('login/', views.Login_View.as_view(), name='login'),
path('logout/', views.Logout_View.as_view(), name='logout'),
path('api/',views.EmployeeView.as_view(), name='api'),
# path('dashboard/', views.Dashboard.as_view(), name='dashboard'),
path('dashboard/employee/', views.Employee_All.as_view(), name='employee_all'),
path('dashboard/employee/new/', views.Employee_New.as_view(), name='employee_new'),
path('dashboard/employee/<int:pk>/view/', views.Employee_View.as_view(), name='employee_view'),
path('dashboard/employee/<int:pk>/update/', views.Employee_Update.as_view(), name='employee_update'),
path('dashboard/employee/<int:pk>/delete/', views.Employee_Delete.as_view(), name='employee_delete'),

path('dashboard/department/add/', views.Department_New.as_view(), name='dept_new')
    ]
