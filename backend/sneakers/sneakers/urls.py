
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

route = routers.DefaultRouter()
from shoes.api  import viewsets as shoesviewsets

route.register(r'sneakers',  shoesviewsets.SneakersViewSet, basename="Sneakers")



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
]
