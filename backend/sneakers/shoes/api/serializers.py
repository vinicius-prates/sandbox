from rest_framework import serializers
from shoes import models 

class SneakersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sneakers
        fields = '__all__'
        
        
        