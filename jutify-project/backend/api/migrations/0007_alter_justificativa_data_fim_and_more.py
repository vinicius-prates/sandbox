# Generated by Django 4.0.6 on 2022-08-31 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_justificativa_data_fim_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='justificativa',
            name='data_fim',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='justificativa',
            name='data_inicio',
            field=models.CharField(max_length=10),
        ),
    ]
