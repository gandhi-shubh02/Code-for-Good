# Generated by Django 2.2 on 2022-06-25 10:51

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_retired', models.BooleanField(default='False')),
                ('is_left', models.BooleanField(default='False')),
                ('emp_id', models.CharField(default='emp852', max_length=70)),
                ('thumb', models.ImageField(blank=True, null=True, upload_to='')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('mobile', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=125)),
                ('address', models.TextField(default='', max_length=100)),
                ('emergency', models.CharField(max_length=11)),
                ('gender', models.CharField(choices=[('male', 'MALE'), ('female', 'FEMALE'), ('other', 'OTHER')], max_length=10)),
                ('joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('language', models.CharField(choices=[('english', 'ENGLISH'), ('hindi', 'HINDI')], default='english', max_length=10)),
                ('accountno', models.CharField(default='0123456789', max_length=10)),
                ('bank', models.CharField(default='SBI', max_length=25)),
                ('salary', models.CharField(default='00,000.00', max_length=16)),
                ('age', models.CharField(max_length=2)),
                ('phases', models.CharField(choices=[('on-hold', 'ON-HOLD'), ('active', 'ACTIVE'), ('resigned', 'RESIGNED')], max_length=10)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.Department')),
            ],
        ),
    ]