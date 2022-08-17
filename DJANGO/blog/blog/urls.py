from importlib.resources import path
from unicodedata import name
from django.contrib import admin
from .views import BlogListView,BlogDetailView
from django.urls import path
urlpatterns = [
    path('post/<int:pk>/',BlogDetailView.as_view(template_name = 'post_detail.html'),name="post_detail"),
    path('',BlogListView.as_view(template_name = 'home.html'),name='home')
]