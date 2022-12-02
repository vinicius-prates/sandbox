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

    def create(self, request, *args, **kwargs):
        id = request.data.get('user_transfer')
        user_to_id = request.data.get('user_receive')

        user_transfer = Account.objects.get(id=id)
        user_receive = Account.objects.get(id=user_to_id)
        value_transfer = request.data['value_transfer']

        data = Transfers(user_transfer=user_transfer, user_receive= user_receive, value_transfer=value_transfer)
        data.save()

        user_transfer.balance = float(user_transfer.balance) - float(value_transfer)
        user_transfer.save()
        user_receive.balance = float(user_receive.balance) + float(value_transfer)
        user_receive.save()

        return Response({'detalhe': 'Transacao adicionada com sucesso!'}, status=status.HTTP_201_CREATED)

    def __str__(self) -> str:
        return self.id


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