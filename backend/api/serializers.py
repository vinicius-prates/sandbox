from rest_framework import serializers
from .models import Colaborador, Turno


class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = ['descricao', 'entrada', 'saida']


class ColaboradorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Colaborador
        fields = ['id', 'edv', 'nome', 'senha', 'dia_curso', 'perm', 'turno']


class LoginSerializer(serializers.Serializer):
    class Meta:
        fields = ['auth']
