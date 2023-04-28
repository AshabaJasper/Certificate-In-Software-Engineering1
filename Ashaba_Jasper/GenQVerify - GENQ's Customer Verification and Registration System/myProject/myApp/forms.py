#Form Validation
from django import forms
from django.core.exceptions import ValidationError
from datetime import date

GENDER_CHOICES = [('-- Select Gender --', '-- Select Gender --'), ('Male', 'Male'), ('Female', 'Female')]

class RegistrationForm(forms.Form):
    first_name = forms.CharField(max_length=255, validators=[lambda val: len(val) >= 2, lambda val: val.isalpha()])
    last_name = forms.CharField(max_length=255, validators=[lambda val: len(val) >= 2, lambda val: val.isalpha()])
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)
    date_of_birth = forms.DateField(input_formats=['%y/%m/%d'], help_text='Format: YY/MM/DD')
    address = forms.CharField(max_length=255, validators=[lambda val: len(val) >= 2])
    gender = forms.ChoiceField(choices=GENDER_CHOICES)

    def clean_date_of_birth(self):
        dob = self.cleaned_data['date_of_birth']
        today = date.today()
        age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
        if age < 18:
            raise ValidationError('You must be at least 18 years old to register.')
        return dob

    def clean_confirm_password(self):
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data.get('confirm_password')
        if password and confirm_password and password != confirm_password:
            raise ValidationError('Passwords do not match.')
        return confirm_password


from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _

from django.shortcuts import render, redirect
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            # Save data to database
            messages.success(request, 'Registration successful!')
            return redirect('register')
        else:
            messages.error(request, 'Registration failed. Please correct the errors below.')
    else:
        form = RegistrationForm()

    return render(request, 'registration.html', {'form': form})

from django.shortcuts import render, redirect
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            # Save data to database
            messages.success(request, 'Registration successful!')
            return redirect('register')
        else:
            messages.error(request, 'Registration failed. Please correct the errors below.')
    else:
        form = RegistrationForm()

    return render(request, 'registration.html', {'form': form})
