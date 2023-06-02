# Create your views here.
from rest_framework import viewsets
from rest_framework_simplejwt.views import TokenObtainPairView

from accounts.models import User
from accounts.serializers import TeacherSerializer, StudentSerializer, MyTokenObtainPairSerializer
from .models import Lesson
from .serializers import LessonSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type__in=["admin", "teacher"])
    serializer_class = TeacherSerializer
    lookup_field = "username"


class StudentViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type="student")
    serializer_class = StudentSerializer
    lookup_field = "username"


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
