class Animal {
  action() {
    console.log("animal action~")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog action~")
  }
}

class Fish extends Animal {
  action(): void {
    console.log("fish action~")
  }
}

class Person extends Animal {

}

function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}

makeActions([new Dog(), new Fish(), new Person()])