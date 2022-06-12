class Person {
  private name: string = ""

  getName() {
    return this.name
  }

  setName(newName: string) {
    this.name = newName
  }
}

const person = new Person()
person.setName("xionglp")
console.log(person.getName())

export {}
