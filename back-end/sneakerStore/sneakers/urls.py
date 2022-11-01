from django.urls import path, include

from rest_framework import routers
from .views import (UserViewSet,ConditionViewSet,BrandViewSet,SneakerSizeViewSet,SneakerViewSet )



router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register("conditions", ConditionViewSet)
router.register("brands", BrandViewSet)
router.register("sneakers-sizes",SneakerSizeViewSet)
router.register("sneakers", SneakerViewSet)

urlpatterns = [
    path("", include(router.urls))
]