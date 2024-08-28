function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let ivan = new Student('Иван','мужской', 22)
let artem = new Student('Артём', 'мужской', 23);



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks = marks;
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') && this.marks != []) {
    return Math.sum(this.marks) / this.marks.length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  
}
