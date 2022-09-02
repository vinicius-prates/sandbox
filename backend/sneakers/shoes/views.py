from rest_framework import viewsets, filters, generics, permissions
from  .models import Sneakers
from rest_framework.views import APIView
from shoes.api.serializers import SneakersSerializer
from django.shortcuts import render
