from django.shortcuts import render

from .models import (Brand, Condition,Sneaker, SneakerSize, User)
from rest_framework.viewsets import ModelViewSet

from .serializers import (ConditionSerializer,BrandSerializer,SneakerSerializer,SneakerSizeSerializer,UserSerializer)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ConditionViewSet(ModelViewSet):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer

class BrandViewSet(ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class SneakerSizeViewSet(ModelViewSet):
    queryset = SneakerSize.objects.all()
    serializer_class = SneakerSizeSerializer
    
class SneakerViewSet(ModelViewSet):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer