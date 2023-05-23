# Generated by Django 4.2.1 on 2023-05-23 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('accounts', '0001_initial'),
        ('management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='subjects',
            field=models.ManyToManyField(blank=True, to='management.subject', verbose_name='やる教科'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions'),
        ),
    ]
