# Generated by Django 4.1 on 2022-08-29 16:47

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sneakers',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=255)),
                ('estado', models.CharField(max_length=50)),
                ('ano_lancamento', models.IntegerField()),
                ('price', models.FloatField()),
                ('marca', models.CharField(max_length=100)),
            ],
        ),
    ]