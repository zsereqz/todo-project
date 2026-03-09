from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name='main'),
    path('add/', views.add_task, name='add'),
    
    path('nolong', views.nolong, name='nolong'),
    path('long', views.long, name='long'),
]