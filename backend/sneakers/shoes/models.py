import uuid
from xml.etree.ElementInclude import default_loader
from django.db import models
from uuid import uuid4

class Sneakers(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=100)
    condition = models.CharField(max_length=50)
    releaser_year = models.IntegerField()
    price = models.FloatField()
    image = models.ImageField()
    