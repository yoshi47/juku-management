# Generated by Django 4.2.1 on 2023-05-26 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0002_school'),
        ('accounts', '0006_student_school'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='management.school', verbose_name='学校'),
        ),
    ]
