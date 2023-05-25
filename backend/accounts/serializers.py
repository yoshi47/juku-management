from rest_framework import serializers
from .models import User, Student


class BaseStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('grade', 'subjects')


class StudentSerializer(serializers.ModelSerializer):
    student = BaseStudentSerializer()
    class Meta:
        model = User
        fields = ('username', 'last_name', 'first_name', 'email', 'student', 'text',)


class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'last_name', 'first_name', 'email', 'text',)
