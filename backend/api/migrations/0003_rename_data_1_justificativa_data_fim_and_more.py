# Generated by Django 4.0.6 on 2022-08-26 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_justificativa_alter_colaborador_perm_delete_userperm_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='justificativa',
            old_name='data_1',
            new_name='data_fim',
        ),
        migrations.RenameField(
            model_name='justificativa',
            old_name='data_2',
            new_name='data_inicio',
        ),
        migrations.RenameField(
            model_name='justificativa',
            old_name='marcacao_1',
            new_name='horario_fim',
        ),
        migrations.RenameField(
            model_name='justificativa',
            old_name='marcacao_2',
            new_name='horario_inicio',
        ),
        migrations.RemoveField(
            model_name='colaborador',
            name='dia_curso',
        ),
        migrations.AlterField(
            model_name='colaborador',
            name='edv',
            field=models.CharField(max_length=15, unique=True),
        ),
    ]
