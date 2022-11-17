from random import randint
from django.db import models

class User(models.Model):
    cpf = models.CharField(max_length=11, primary_key=True)
    password = models.CharField(max_length=100)
    

    def __str__(self) -> str:   
        return self.cpf

class Client(models.Model):

    SEXO_MASCULINO = 'M'
    SEXO_FEMININO = 'F'

    SEXO_TIPOS = [
        (SEXO_MASCULINO, 'Male'),
        (SEXO_FEMININO, 'Female'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=80)
    email = models.EmailField()
    sexo = models.CharField(max_length=1, choices=SEXO_TIPOS)
    birth_date = models.DateField()
    phone_number = models.CharField(max_length=20)
    created_at = models.DateField(auto_now=True)
    good_client = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.user_name

    
class Account(models.Model):

    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    agency = models.CharField(max_length=5)
    account  = models.CharField(max_length=8)
    balance = models.DecimalField(max_digits=20, decimal_places=2)
    
    def save(self, *args, **kwargs):
        self.agency = f"{randint(10000,99999)}"
        self.account = f"{randint(10000000,99999999)}"
        self.balance = 0

        super(Account, self).save( *args, **kwargs)

    def __str__(self) -> str:
        return self.client

class Transfers(models.Model):

    user_transfer = models.ForeignKey(Client, on_delete=models.DO_NOTHING, related_name='user_transfer')
    user_receive = models.ForeignKey(Client, on_delete=models.DO_NOTHING, related_name='user_receive')
    value_transfer = models.DecimalField(max_digits=20, decimal_places=2)
    date_of_transfer = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.id


class Card(models.Model):

    GOLD = 'G'
    EXCLUSIVE  = 'E'
    PLATINUM = 'P'

    CARD_TYPES = [
        (GOLD, 'Gold'),
        (EXCLUSIVE, 'Exclusive'),
        (PLATINUM, 'Platinum'),

    ]
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    card_number = models.CharField(max_length=16)
    cvv = models.CharField(max_length=3) 
    card_type = models.CharField(max_length=10, choices=CARD_TYPES, default=GOLD)
    expiration_date = models.DateField()
    invoice_expiration_day = models.PositiveSmallIntegerField()
    card_flag = models.CharField(max_length=30)
    is_blocked = models.BooleanField(default=False)
    

    def __str__(self) -> str:
        return self.card_number 

class Invoice(models.Model):

    invoice_card  = models.ForeignKey(Card, on_delete=models.DO_NOTHING)
    invoice_value = models.DecimalField(max_digits=6, decimal_places=2)
    invoice_expiration_date = models.DateField()
    invoice_payed_date = models.DateField()
    is_expired = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.id

class Advance(models.Model):

    APPROVED = 'A'
    RECUSED = 'R'
    WAITING = 'W'
    statusChoice = [
        ('A', 'Approved'),
        ('R', 'Recused'),
        ('W', 'Waiting'),
    ]

    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    advance_value = models.DecimalField(max_digits=20, decimal_places=2)
    advance_fees = models.DecimalField(max_digits=5, decimal_places=2)
    advance_installments = models.PositiveSmallIntegerField()
    advance_status = models.CharField(max_length=12, choices=statusChoice, default=WAITING)

    def __str__(self) -> str:
        return self.id

class AdvancePayment(models.Model):
    
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    total_value = models.DecimalField(max_digits=12, decimal_places=2)
    advance_payment_day = models.DateField()
    advance_expire_day = models.DateField()


class Abstract(models.Model):

    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    invoices = models.ForeignKey(Invoice, on_delete=models.DO_NOTHING)
    transfers = models.ForeignKey(Transfers, on_delete=models.DO_NOTHING)

    def __str__(self) -> str:
        return self.id