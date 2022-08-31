from django.db import models
from stdimage import StdImageField

from uuid import uuid4

class Sneakers(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=100)
    condition = models.CharField(max_length=50)
    releaser_year = models.IntegerField()
    price = models.FloatField()
    image = StdImageField(upload_to='%y/%m/%d')
    