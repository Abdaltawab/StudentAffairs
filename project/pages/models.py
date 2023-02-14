from django.db import models

class Student(models.Model):
    sID = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    dateOfBirth = models.DateField()
    gpa = models.FloatField()
    level = models.CharField(max_length=6)
    gender = models.CharField(max_length=6)
    status = models.CharField(max_length=8)
    department = models.CharField(max_length=23)
    email = models.EmailField()
    phone = models.CharField(max_length=11)

    def __str__(self):
        return str(self.sID)

    class Meta:
        ordering = ['sID']
        verbose_name = 'Student'



    def isValid(self):
        if self.sID is not None and 9999999 < int(self.sID) < 99999999:
            if self.name is not None and self.name != '':
                if self.dateOfBirth is not None:
                    if self.gpa is not None and 0.0 <= float(self.gpa) <= 4.0:
                        if self.level is not None and self.level != '':
                            if self.gender is not None and self.gender != '':
                                if self.status is not None and self.status != '':
                                    if self.department is not None and self.department != '':
                                        if self.email is not None and self.email != '':
                                            if self.phone is not None and self.phone != '':
                                                return True

