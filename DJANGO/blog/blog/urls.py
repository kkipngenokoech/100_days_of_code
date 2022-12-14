from importlib.resources import path
from unicodedata import name
from django.contrib import admin
from .views import BlogListView,BlogDetailView, BlogCreateView, BlogUpdateView, BlogDeleteView
from django.urls import path
urlpatterns = [
    path('post/<int:pk>/',BlogDeleteView.as_view(),name="post_delete"),
    path('post/<int:pk>/',BlogUpdateView.as_view(),name = 'post_edit'),
    path('post/new/',BlogCreateView.as_view(),name = 'post_new'),
    path('post/<int:pk>/',BlogDetailView.as_view(),name="post_detail"),
    path('',BlogListView.as_view(template_name = 'home.html'),name='home')
]