from rest_framework import serializers
from .models import Lesson

class LessonSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='student.username', read_only=True)
    student = serializers.CharField(source='student.get_full_name', read_only=True)
    teacher = serializers.CharField(source='teacher.get_full_name', read_only=True)
    subject = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = Lesson
        fields = ('id', 'username', 'student', 'teacher', 'subject', 'period', 'date',)