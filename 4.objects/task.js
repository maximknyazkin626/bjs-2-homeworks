function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.marks = [];
let ivan = new Student('Иван','мужской', 22)
let artem = new Student('Артём', 'мужской', 23);



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
