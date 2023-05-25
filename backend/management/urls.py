from rest_framework import routers

from .views import UserViewSet, StudentViewSet

router = routers.DefaultRouter()
router.register(r'teachers', UserViewSet)
router.register(r'students', StudentViewSet)
