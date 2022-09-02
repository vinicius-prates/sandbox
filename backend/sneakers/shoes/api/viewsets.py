from rest_framework import viewsets, generics, status
from shoes.api import serializers
from shoes import models
from rest_framework.views import APIView
from rest_framework.response import Response


class SneakersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SneakersSerializer
    queryset = models.Sneakers.objects.all()
    