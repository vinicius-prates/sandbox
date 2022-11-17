from .models import (Client, 
Account, Abstract, Advance,
 AdvancePayment, Card, Invoice,
  Transfers, User)
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import (
    AccountCreateSerializer,
    LoginSerializer,
    UserSerializer,
    ClientSerializer, AccountSerializer, TransfersSerializer,
    CardSerializer, InvoiceSerializer, AdvanceSerializer,
    AdvancePaymentSerializer, AbstractSerializer
)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class authViaCpf(APIView):
    def post(self, request, *args, **kwargs):
        password = request.data.get('password')
        cpf = request.data.get('cpf')
        login_data = { 'account_id': None }

        try:
            user = User.objects.get(cpf=cpf, password=password)
            cliente = Client.objects.get(user_id=user.cpf)
            acc = Account.objects.get(client=cliente)
            login_data['account_id'] = acc.id
            serializer = LoginSerializer(data=login_data)
            return Response(serializer.initial_data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            serializer = LoginSerializer(data=login_data)
            return Response(serializer.initial_data, status=status.HTTP_200_OK)

class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    def get_serializer_class(self):
        if self.request.method == "POST":
            return AccountCreateSerializer
        else:
            return AccountSerializer

class TransfersViewSet(ModelViewSet):
    queryset = Transfers.objects.all()
    serializer_class = TransfersSerializer

class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class InvoiceViewSet(ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

class AdvanceViewSet(ModelViewSet):
    queryset = Advance.objects.all()
    serializer_class = AdvanceSerializer

class AdvancePaymentViewSet(ModelViewSet):
    queryset = AdvancePayment.objects.all()
    serializer_class = AdvancePaymentSerializer

class AbstractViewSet(ModelViewSet):
    queryset = Abstract.objects.all()
    serializer_class = AbstractSerializer