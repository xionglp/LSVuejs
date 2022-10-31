type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number
  }
}

const info: Person = {
  name: "xionglp",
  friend: {
    name: "kobe",
    age: 12,
  }
}


console.log(info.name)
console.log(info.friend?.name)
console.log(info.friend?.age)

export {}