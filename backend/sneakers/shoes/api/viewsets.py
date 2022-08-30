from rest_framework import viewsets
from shoes.api import serializers
from shoes import models

class SneakersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SneakersSerializer
    queryset = models.Sneakers.objects.all()