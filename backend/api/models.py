from django.db import models
import hashlib


class Turno(models.Model):
    descricao = models.CharField(max_length=30)
    entrada = models.CharField(max_length=8)
    saida = models.CharField(max_length=8)

    def __str__(self):
        return self.descricao


class Colaborador(models.Model):
    class DiaCurso(models.TextChoices):
        segunda = 'SEG'
        terca = 'TER'
        quarta = 'QUA'
        quinta = 'QUI'
        sexta = 'SEX'

    class UserPerm(models.TextChoices):
        administrador = 'Admin'
        super_usuario = 'Super usuário'
        usuario = 'Usuário'

    edv = models.CharField(max_length=15)
    nome = models.CharField(max_length=150)
    senha = models.CharField(max_length=200)
    turno = models.ForeignKey(Turno, on_delete=models.DO_NOTHING)
    dia_curso = models.CharField(
        max_length=3,
        choices=DiaCurso.choices,
        default=None
    )
    perm = models.CharField(
        max_length=30,
        choices=UserPerm.choices,
        default='Usuário'
    )

    # overriding default save method to auto encrypt password on save
    def save(self, *args, **kwargs):
        self.senha = hashlib.sha256(self.senha.encode()).hexdigest()
        super(Colaborador, self).save(*args, **kwargs)

    def __str__(self):
        return self.nome


class Justificativa(models.Model):
    class Ocorrencia(models.TextChoices):
        atraso_na_entrada = 'Atraso na Entrada'
        saida_antecipada = 'Saída antecipada'
        falta = 'Falta'
        afastamento = 'Afastamento'
        intervalo_irregular = 'Intervalo Irregular'
        cracha_provisorio = 'Crachá provisório'

    class Justificado(models.TextChoices):
        sim = 'S'
        nao = 'N'

    colaborador = models.ForeignKey(Colaborador, on_delete=models.DO_NOTHING)
    ocorrencia = models.CharField(
        max_length=30,
        choices=Ocorrencia.choices,
        default=None
    )
    data_1 = models.CharField(max_length=10)
    data_2 = models.CharField(max_length=10)
    marcacao_1 = models.TimeField()
    marcacao_2 = models.TimeField()
    motivo = models.TextField(max_length=2000)
    justificado = models.CharField(
        max_length=1,
        choices=Justificado.choices,
        default='N'
    )

    def __str__(self):
        return f'{self.ocorrencia} - {self.colaborador.nome}'


