# Generated by Django 4.2.1 on 2023-05-24 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0001_initial'),
        ('accounts', '0003_remove_user_subjects_student_subjects_user_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='subjects',
            field=models.ManyToManyField(blank=True, to='management.subject', verbose_name='やる教科'),
        ),
    ]
