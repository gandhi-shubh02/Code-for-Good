from django.urls import path, include
from exit import views

urlpatterns = [
    path('retire/',views.retire,name="retire"),
    path('leave/',views.leave,name="leave"),
    # path('api/',views.empView.as_view(),name="api"),
]
