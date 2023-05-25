# Create your views here.
from rest_framework import viewsets

from accounts.models import User
from accounts.serializers import TeacherSerializer, StudentSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type__in=["admin", "teacher"])
    serializer_class = TeacherSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(user_type="student")
    serializer_class = StudentSerializer
