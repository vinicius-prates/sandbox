
from django.urls import path, include
from rest_framework import routers
from .views import (
    ClientViewSet, AccountViewSet, TransfersViewSet,
    CardViewSet, InvoiceViewSet, AdvanceViewSet,
    AdvancePaymentViewSet, AbstractViewSet  
)

router = routers.DefaultRouter()
