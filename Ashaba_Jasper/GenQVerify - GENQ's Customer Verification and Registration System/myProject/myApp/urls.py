from .import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="index"),
]

from django.urls import path
from myApp import views

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('users/<int:pk>/', views.user_detail, name='user_detail'),
]
