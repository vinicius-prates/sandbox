from django.urls import path, include
from rest_framework import routers
from .views import ColaboradorViewSet, TurnoViewSet, LoginAPIView, JustificativaViewSet

router = routers.DefaultRouter()
router.register('colaboradores', ColaboradorViewSet)
router.register('turnos', TurnoViewSet)
router.register('justificativas', JustificativaViewSet)


urlpatterns = [
    path('tryLogin/', LoginAPIView.as_view()),
    path('', include(router.urls))
]
