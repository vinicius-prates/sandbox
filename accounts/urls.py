
from django.urls import path, include
from rest_framework import routers
from .views import (
    ClientViewSet, AccountViewSet, TransfersViewSet,
    CardViewSet, InvoiceViewSet, AdvanceViewSet,
    AdvancePaymentViewSet, AbstractViewSet  
)

router = routers.DefaultRouter()
router.register("client", ClientViewSet)
router.register("account", AccountViewSet)
router.register("transfers", TransfersViewSet)
router.register("cards", CardViewSet)
router.register("invoice", InvoiceViewSet)
router.register("advance", AdvanceViewSet)
router.register("advance-payment", AdvancePaymentViewSet)
router.register("abstract", AbstractViewSet)

urlpatterns = [
    path("",include(router.urls)),

]