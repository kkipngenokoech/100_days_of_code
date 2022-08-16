from importlib.resources import path
from unicodedata import name
from django.contrib import admin
from .views import BlogListView
urlspattern = [
    path('',BlogListView.as_view(),name = 'home')
]