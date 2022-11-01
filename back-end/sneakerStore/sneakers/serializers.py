from dataclasses import field, fields
from rest_framework.serializers import ModelSerializer
from .models import (User, Brand, SneakerSize, Condition, Sneaker)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

class SneakerSizeSerializer(ModelSerializer):
    class Meta:
        model = SneakerSize
        fields = "__all__"

class ConditionSerializer(ModelSerializer):
    class Meta:
        model = Condition
        fields = "__all__"

class SneakerSerializer(ModelSerializer):
    class Meta:
        model = Sneaker
        fields = "__all__"

