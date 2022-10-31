// 类型断言 as

const el = document.getElementById("image") as HTMLImageElement;
el.src = "地址"

// 案例2
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu);