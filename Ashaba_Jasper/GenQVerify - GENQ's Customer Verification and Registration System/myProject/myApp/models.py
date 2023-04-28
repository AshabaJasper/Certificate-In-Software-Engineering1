# Create your models here.
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()

#from djongo import models interferes with URLs

"""class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    dob = models.DateField()
    address = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)

    class Meta:
        abstract = True"""
