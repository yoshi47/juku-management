from django.contrib import admin

from .models import Lesson, Subject


# Register your models here.
@admin.register(Subject, Lesson)
class LessonAdmin(admin.ModelAdmin):
    pass
