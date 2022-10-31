from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 

class SneakerSize(models.Model):
    sneaker_size = models.IntegerField(default=39,  validators=[MinValueValidator(20), MaxValueValidator(50)])
class User (models.Model):

    nickname = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    sneaker_size = models.ForeignKey(SneakerSize, on_delete= models.DO_NOTHING)


