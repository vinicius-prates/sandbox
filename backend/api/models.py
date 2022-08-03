from django.db import models


class User(models.Model):
    nome = models.CharField(max_length=255)
    edv = models.CharField(max_length=20)
    senha = models.CharField(max_length=255)  # store a hash obv
    email = models.EmailField()
    # turma = models.ForeignKey(Turma) ?
    # perm = models.CharField ?
