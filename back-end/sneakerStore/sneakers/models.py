from email.policy import default
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
from pictures.models import PictureField
class SneakerSize(models.Model):
    
    sneaker_size = models.IntegerField(default=39,  validators=[MinValueValidator(20), MaxValueValidator(50)])

    def __str__(self) -> str:
        return self.sneaker_size

class User (models.Model):

    nickname = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=50)
    sneaker_size = models.ForeignKey(SneakerSize, on_delete= models.DO_NOTHING)

    def __str__(self) -> str:
        return self.nickname


class Brand (models.Model):
    
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

class Condition (models.Model):

    condition = models.DecimalField(default = 10,validators=[MinValueValidator(0), MaxValueValidator(10)], decimal_places=1, max_digits=5)
    itsnew = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.condition

class Sneaker (models.Model):

    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    size = models.ForeignKey(SneakerSize, on_delete = models.DO_NOTHING)
    brand = models.ForeignKey(Brand, on_delete= models.DO_NOTHING)
    condition = models.ForeignKey(Condition, on_delete=models.DO_NOTHING)
    description = models.TextField()
    image = PictureField(upload_to="sneakerImages")
    
    def __str__(self) -> str:
        return self.name