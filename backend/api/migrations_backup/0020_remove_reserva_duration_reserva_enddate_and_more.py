# Generated by Django 4.0.3 on 2022-10-08 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_reserva_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reserva',
            name='duration',
        ),
        migrations.AddField(
            model_name='reserva',
            name='endDate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='reserva',
            name='startDate',
            field=models.DateTimeField(null=True),
        ),
    ]
