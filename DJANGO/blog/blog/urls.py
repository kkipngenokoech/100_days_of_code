from importlib.resources import path
from unicodedata import name
from django.contrib import admin
from .views import BlogListView,BlogDetailView, BlogCreateView
from django.urls import path
urlpatterns = [
    path('post/new/',BlogCreateView.as_view(),name = 'post_new'),
    path('post/<int:pk>/',BlogDetailView.as_view(),name="post_detail"),
    path('',BlogListView.as_view(template_name = 'home.html'),name='home')
]