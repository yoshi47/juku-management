from django.contrib import admin

from .models import Subject, Lesson


# Register your models here.
class SubjectAdmin(admin.ModelAdmin):
    pass


class LessonAdmin(admin.ModelAdmin):
    pass


admin.site.register(Subject, SubjectAdmin)
admin.site.register(Lesson, LessonAdmin)
