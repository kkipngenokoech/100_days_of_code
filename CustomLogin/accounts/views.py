import email
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

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