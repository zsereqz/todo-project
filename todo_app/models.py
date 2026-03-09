from django.db import models
from django.contrib.auth.models import User



class Tasks(models.Model):
    title = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False) # готово или нет(0 не готово)
    created_at = models.DateTimeField(auto_now_add=True)