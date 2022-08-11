from re import template
from django.urls import path
from .views import HomePageView
urlpatterns = [
    path('',HomePageView.as_view(template_name="home.html"),name='home'),
]