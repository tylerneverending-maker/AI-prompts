"""
URL configuration for ai_useful_prompts project.
"""
from django.contrib import admin
from django.urls import path
from prompts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.prompt_list, name='prompt_list'),
]