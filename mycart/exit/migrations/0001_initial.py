# Generated by Django 2.2 on 2022-06-25 11:52

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Leave',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('leave_date', models.DateField(default=django.utils.timezone.now)),
                ('name', models.CharField(max_length=70)),
                ('reason', models.TextField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Retire',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('retire_date', models.DateField(default=django.utils.timezone.now)),
                ('name', models.CharField(max_length=70)),
            ],
        ),
    ]
