class Person {
  name: string = ""
  age: number = 18

  eatting() {
    console.log("eatting~")
  }
}

class Student extends Person {
  sno: number = 10001

  studying() {
    console.log("studying~")
  }
}

class Teacher extends Person {
  title: string = ""

  teaching() {
    console.log("teaching")
  }
}

const stu = new Student()
stu.name = "xionglp";
stu.age = 33;
console.log(stu.name, stu.age)
stu.eatting()

export {}