# Our urls

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Root URL for the app
    path('tasks/', views.getTasks, name='get-tasks'),
    path('tasks/add/', views.addTask, name='add-task'),

]
