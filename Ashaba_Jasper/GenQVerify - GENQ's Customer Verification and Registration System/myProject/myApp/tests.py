from django.test import TestCase

# Create your tests here.

from django.shortcuts import render, redirect
from myApp.forms import UserForm
from myApp.models import User

def user_list(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

def user_detail(request, pk):
    user = User.objects.get(pk=pk)
    return render(request, 'user_detail.html', {'user': user})

def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()
    return render(request, 'user_form.html', {'form': form})
