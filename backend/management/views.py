# Create your views here.
from rest_framework import viewsets

from accounts.models import User
from accounts.serializers import TeacherSerializer, StudentSerializer

from .models import Lesson
from .serializers import LessonSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type__in=["admin", "teacher"])
    serializer_class = TeacherSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type="student")
    serializer_class = StudentSerializer
    lookup_field = "username"

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    lookup_field = "student__username"

    # def get_queryset(self):
    #     queryset = Lesson.objects.all()
    #     username = self.request.query_params.get('username', None)
    #     if username:
    #         queryset = queryset.filter(student__username=username)
    #     return queryset