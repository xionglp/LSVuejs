class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + ", eating");
  }
}

const person = new Person("xionglp", 18);
console.log(person.name)
person.eating()

export {}

