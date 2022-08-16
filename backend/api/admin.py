from django.contrib import admin
from .models import Colaborador, Turno, Justificativa

# Register your models here.
admin.site.register(Colaborador)
admin.site.register(Turno)
admin.site.register(Justificativa)
