# Generated by Django 2.2 on 2022-06-25 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20220625_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='emp_id',
            field=models.CharField(default='emp707', max_length=70),
        ),
        migrations.AlterField(
            model_name='employee',
            name='is_left',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='employee',
            name='is_retired',
            field=models.BooleanField(default=False),
        ),
    ]
