from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import (
    ClientSerializer, AccountSerializer, TransfersSerializer,
    CardSerializer, InvoiceSerializer, AdvanceSerializer,
    AdvancePaymentSerializer, AbstractSerializer
)

class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

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