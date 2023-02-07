from dataclasses import fields
from rest_framework.serializers import ModelSerializer, Serializer
from .models import (Client, 
Account, Abstract, Advance,
 AdvancePayment, Card, Invoice,
  Transfers, User)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = "__all__"

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"
        depth = 1
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)

class LoginSerializer(Serializer):
    class Meta:
        fields = ['account_id']

class AccountCreateSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ["client"]
        
    

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
        