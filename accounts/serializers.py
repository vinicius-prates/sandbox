from rest_framework.serializers import ModelSerializer
from .models import (Client, 
Account, Abstract, Advance,
 AdvancePayment, Card, Invoice,
  Transfers, User)

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"
    

class TransfersSerializer(ModelSerializer):
    class Meta:
        model = Transfers
        fields = "__all__"

class CardSerializer(ModelSerializer):
    class Meta:
        model = Card
        fields = "__all__"

class InvoiceSerializer(ModelSerializer):
    class Meta:
        model = Invoice
        fields = "__all__"

class AdvanceSerializer(ModelSerializer):
    class Meta:
        model = Advance
        fields = "__all__"

class AdvancePaymentSerializer(ModelSerializer):
    class Meta:
        model = AdvancePayment
        fields = "__all__"

class AbstractSerializer(ModelSerializer):
    class Meta:
        model = Abstract
        fields = "__all__"
        