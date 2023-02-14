from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'home'),
    path('aboutUs', views.aboutUs, name = 'about'),
    path('addStudent', views.AddStudent, name = 'add'),
    path('editStudent', views.EditStudent, name = 'edit'),
    path('assignDepartment', views.assignDepartment, name = 'assign'),
    path('contactUs', views.contactUs, name = 'contact'),
    path('viewStudents', views.viewStudents, name = 'view'),
]
