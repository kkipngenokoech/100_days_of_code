from django.shortcuts import render
#we import httpResponse so that we can return a response object to the user
from django.http import HttpResponse
# Create your views here.

#every other time function home_page_view() is called it returns:
def home_page_view(request):
    return HttpResponse("Hello, Multiverse")
