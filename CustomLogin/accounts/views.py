from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User, auth   

# Create your views here.
def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.info(request,'username is not available')
                return redirect(register)
            elif User.objects.filter(email=email).exists():
                messages.info(request,'account with that email already exists')
                return redirect(register)
            else:
                user = User.objects.create_user(username=username,password=password,email=email,first_name=first_name,last_name=last_name)
                user.save()
                return redirect('login_user')
        else:
            messages.info(request,'passwords not matching')
            return redirect(register)
    else:
        return render(request,'registration.html')

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password )
        
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            messages.info(request,'invalid username or password')
            return redirect('login_user')

    else:
        return render(request, 'login.html')