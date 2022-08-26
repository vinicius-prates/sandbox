from rest_framework import serializers
from .models import Colaborador, Turno, Justificativa


class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = ["id", "descricao", "entrada", "saida"]


class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = ["id", "edv", "nome", "email", "senha", "perm", "turno"]


class LoginSerializer(serializers.Serializer):
    class Meta:
        fields = ["auth"]


class JustificativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Justificativa
        fields = "__all__"
