# Generated by Django 4.2.1 on 2023-05-24 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_student_subjects'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='grade',
            field=models.IntegerField(choices=[('小学校', ((1, '1年生'), (2, '2年生'), (3, '3年生'), (4, '4年生'), (5, '5年生'), (6, '6年生'))), ('中学校', ((7, '1年生'), (8, '2年生'), (9, '3年生'))), ('高校', ((10, '1年生'), (11, '2年生'), (12, '3年生'))), (13, '既卒')], verbose_name='学年'),
        ),
    ]
