from pyexpat import model
#from turtle import title
from django.db import models

# Create your models here
#here we are creating a subclass of models.model
class post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey('auth.user',on_delete=models.CASCADE)
    body = models.TextField()
    def __str__(self):
        return self.title