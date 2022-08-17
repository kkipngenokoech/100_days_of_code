from importlib.resources import path
from unicodedata import name
from django.contrib import admin
from .views import BlogListView
from django.urls import path
urlpatterns = [
    path('',BlogListView.as_view(template_name = 'home.html'),name='home')
]