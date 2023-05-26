from django.contrib import admin

from .models import Lesson, Subject, School


# Register your models here.
@admin.register(Subject, Lesson)
class LessonAdmin(admin.ModelAdmin):
    pass


@admin.register(School)
class shcoolAdmin(admin.ModelAdmin):
    pass
