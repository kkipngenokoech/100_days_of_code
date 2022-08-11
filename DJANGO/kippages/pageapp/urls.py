from re import template
from unicodedata import name
from django.urls import path
from .views import HomePageView, AboutPageView
urlpatterns = [
    path('about/',AboutPageView.as_view(template_name="about.html"),name='about'),
    path('',HomePageView.as_view(template_name="home.html"),name='home')
]