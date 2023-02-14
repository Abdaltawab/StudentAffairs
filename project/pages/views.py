import imp
from django.shortcuts import render
from .models import Student

def index(request):
    return render(request, 'Home.html')

def aboutUs(request):
    return render(request, 'AboutUs.html')

def addStudent(request):
    return render(request, 'AddStudent.html')

def assignDepartment(request):
    return render(request, 'AssignDepartment.html')

def contactUs(request):
    return render(request, 'ContactUs.html')

def viewStudents(request):
    return render(request, 'ViewStudents.html', {'Students': Student.objects.all()})

def EditStudent(request):
    if request.method == 'POST':
        ID = request.POST.get('sID')
        if Student.objects.filter(sID=ID).exists():
            print(Student.objects.filter(sID=ID))
            NAME = request.POST.get('name')
            DATE_OF_BIRTH = request.POST.get('dateOfBirth')
            GPA = request.POST.get('gpa')
            LEVEL = request.POST.get('level')
            GENDER = request.POST.get('gender')
            STATUS = request.POST.get('status')
            DEPARTMENT = request.POST.get('department')
            EMAIL = request.POST.get('email')
            PHONE = request.POST.get('phone')
            Data = Student.objects.get(sID=ID)
            Data.name = NAME
            Data.dateOfBirth = DATE_OF_BIRTH
            Data.gpa = GPA
            Data.level = LEVEL
            Data.gender = GENDER
            Data.status = STATUS
            Data.department = DEPARTMENT
            Data.email = EMAIL
            Data.phone = PHONE
            Data.save()
            return render(request, 'EditStudent.htm')
    return render(request, 'EditStudent.html')


def AddStudent(request):
    print(request)
    if request.method == 'GET':
        return addStudent(request)
    elif request.method == 'POST':
        ID = request.POST.get('sID')
        NAME = request.POST.get('name')
        DATE_OF_BIRTH = request.POST.get('dateOfBirth')
        GPA = request.POST.get('gpa')
        LEVEL = request.POST.get('level')
        GENDER = request.POST.get('gender')
        STATUS = request.POST.get('status')
        DEPARTMENT = request.POST.get('department')
        EMAIL = request.POST.get('email')
        PHONE = request.POST.get('phone')
        Data = Student(sID=ID, name=NAME, dateOfBirth=DATE_OF_BIRTH, gpa=GPA, level=LEVEL, gender=GENDER, status=STATUS, department=DEPARTMENT, email=EMAIL, phone=PHONE)
        if Data.isValid():
            Data.save()
            return render(request, 'AddStudent.html')
        else:
            return render(request, 'AddStudent.html')
