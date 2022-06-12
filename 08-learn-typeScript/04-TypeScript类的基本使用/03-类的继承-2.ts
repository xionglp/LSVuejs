class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating 100行")
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    // 调用父类的构造器
    super(name, age)
    this.sno = sno
  }

  // eating(): void {
  //   console.log("student eating")
  // }

  studying() {
    console.log("student studying")
  }
}


const stu = new Student("xionglp", 22, 100010);
console.log(stu.name, stu.age, stu.sno)
stu.eating()

export {}


