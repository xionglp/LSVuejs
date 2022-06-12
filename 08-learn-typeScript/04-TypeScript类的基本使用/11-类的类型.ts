class Person {
  name: string = "kobe"
  eating() {

  }
}

const p: Person = {
  name: "xionglp",
  eating: function() {

  }
}

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({name: "xlp", eating: function() {}})

export {}
