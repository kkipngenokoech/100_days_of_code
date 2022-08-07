from django.urls import path
from .views import home_page_view
urlpatterns = [
    #if the user requests the homepage(''),then view presents home_page_vew
    path('',home_page_view,name='home')
]   