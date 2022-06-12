class Person {
  // 1. 只读属性是可以在构造器中赋值， 赋值之后就不可以修改
  // 2. 属性本身不能进行属性，但是如果是对象类型，对象中的属性可以修改
  readonly name: string
  age?: number
  readonly friend?: Person
  constructor(name: string, friend?: Person) {
    this.name = name;
    this.friend = friend
  }
}

const p = new Person("xionglp", new Person("kobe"))
console.log(p.name)
console.log(p.friend)

if (p.friend) {
  p.friend.age = 30
}

console.log(p.friend)



export {}
