from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User, Student


# Register your models here.
class StudentInline(admin.StackedInline):
    model = Student
# @admin.register(Student)
# class StudentAdmin(admin.ModelAdmin):
#     pass

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    inlines = [
        StudentInline,
    ]
    # todo adminページのカスタマイズをする
    # pass