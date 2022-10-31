interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: "xionglp",
  age: 19,
  friend: {
    name: "kobe"
  }
}

console.log(info.friend?.name)
console.log(info.name)

export {}