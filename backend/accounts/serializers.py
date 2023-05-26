from rest_framework import serializers
from .models import User, Student


class BaseStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('grade', 'subjects')


class StudentSerializer(serializers.ModelSerializer):
    student = BaseStudentSerializer()
    grade = serializers.CharField(source='student.get_grade_display', read_only=True)

    class Meta:
        model = User
        fields = ('username', 'last_name', 'first_name', 'email', 'grade', 'student', 'text',)


class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'last_name', 'first_name', 'email', 'text',)
