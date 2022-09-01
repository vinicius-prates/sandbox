
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from shoes.views import CreateSneaker, EditSneaker, DeleteSneaker 


from rest_framework import routers

route = routers.DefaultRouter()
from shoes.api  import viewsets as shoesviewsets

route.register(r'sneakers',  shoesviewsets.SneakersViewSet, basename="Sneakers")



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls)),
    path('create/', CreateSneaker.as_view(), name='createpost'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
