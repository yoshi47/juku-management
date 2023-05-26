from rest_framework import routers

from .views import UserViewSet, StudentViewSet, LessonViewSet

router = routers.DefaultRouter()
router.register(r'teachers', UserViewSet, basename='teacher')
router.register(r'students', StudentViewSet, basename='student')
router.register(r'lessons', LessonViewSet, basename='lesson')