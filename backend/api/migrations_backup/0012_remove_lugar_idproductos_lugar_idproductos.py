# Generated by Django 4.0.3 on 2022-09-21 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_merge_20220920_2115'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lugar',
            name='idProductos',
        ),
        migrations.AddField(
            model_name='lugar',
            name='idProductos',
            field=models.ManyToManyField(null=True, to='api.producto'),
        ),
    ]