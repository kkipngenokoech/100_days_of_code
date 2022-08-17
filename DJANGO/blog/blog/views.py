from django.shortcuts import render
# we are going to use listview and the model we created
from django.views.generic import ListView, DetailView
from .models import post

# Create your views here.
class BlogListView(ListView):
    model = post
    template_name = 'home.html'

class BlogDetailView(DetailView):
    model = post
    template_name = 'post_detail.html'