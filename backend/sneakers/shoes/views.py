from rest_framework import viewsets, filters, generics, permissions
from  .models import Sneakers
from rest_framework.views import APIView
from shoes.api.serializers import SneakersSerializer
from django.shortcuts import render

class CreateSneaker(generics.CreateAPIView):
    permissions_class = [permissions.IsAuthenticated]
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer

class EditSneaker(generics.UpdateAPIView):
    permissions_classes = [permissions.IsAuthenticated]
    serializer_class = SneakersSerializer
    queryset = Sneakers.objects.all()

class DeleteSneaker(generics.RetrieveDestroyAPIView):
    permissions_classes = [permissions.IsAuthenticated]
    serializer_class = SneakersSerializer
    queryset = Sneakers.objects.all()