from django.urls import path, include
from rest_framework import routers
from .views import ColaboradorViewSet, TurnoViewSet, LoginAPIView

router = routers.DefaultRouter()
router.register('colaboradores', ColaboradorViewSet)
router.register('turnos', TurnoViewSet)


urlpatterns = [
    path('tryLogin/', LoginAPIView.as_view()),
    path('', include(router.urls))
]
