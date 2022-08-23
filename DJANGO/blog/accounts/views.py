from django.shortcuts import render
from django.contrib.auth.forms import UserChangeForm
from django.urls import reverse_lazy
from django.views import generic
# Create your views here.

class SignUpView(generic.CreateView):
    form_class = UserChangeForm
    success_url = reverse_lazy('login')# it serves the login upon success
    template_name = 'signup.html'
