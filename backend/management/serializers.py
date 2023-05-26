from rest_framework import serializers
from .models import Subject, Lesson

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('student', 'teacher', 'subject', 'period', 'date',)