import hashlib
from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Colaborador, Turno, Justificativa
from .serializers import (
    ColaboradorSerializer,
    TurnoSerializer,
    LoginSerializer,
    JustificativaSerializer,
    JustificativaInfoSerializer,
)
from rest_framework.permissions import SAFE_METHODS


class ColaboradorViewSet(
    GenericViewSet,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    ListModelMixin,
    DestroyModelMixin,
):

    serializer_class = ColaboradorSerializer
    queryset = Colaborador.objects.all()


class TurnoViewSet(ModelViewSet):

    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()


class JustificativaViewSet(ModelViewSet):
    queryset = Justificativa.objects.all()

    def get_serializer_class(self):
        if not self.request.method in SAFE_METHODS:
            return JustificativaSerializer
        return JustificativaInfoSerializer


class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        encrypted_pass = hashlib.sha256(request.data.get("senha").encode()).hexdigest()
        login_data = {"auth": False, "colaborador": None}

        try:
            colaborador = Colaborador.objects.get(
                edv=request.data.get("edv"), senha=encrypted_pass
            )
            login_data["auth"] = True
            ser = ColaboradorSerializer(colaborador)
            login_data["colaborador"] = {**ser.data}
            serializer = LoginSerializer(data=login_data)
            return Response(serializer.initial_data, status=status.HTTP_200_OK)
        except Colaborador.DoesNotExist:
            serializer = LoginSerializer(data=login_data)
            return Response(serializer.initial_data, status=status.HTTP_200_OK)
