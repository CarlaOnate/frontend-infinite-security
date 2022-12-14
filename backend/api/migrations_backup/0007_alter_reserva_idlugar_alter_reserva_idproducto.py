# Generated by Django 4.0.3 on 2022-09-20 14:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_usuario_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='idLugar',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='api.lugar'),
        ),
        migrations.AlterField(
            model_name='reserva',
            name='idProducto',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='api.producto'),
        ),
    ]
