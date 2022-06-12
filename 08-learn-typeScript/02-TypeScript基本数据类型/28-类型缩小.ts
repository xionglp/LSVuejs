// 类型缩小
// 1. typeof
// 2. 平等缩小 ===   !==
// 3. instanceof
// 4. in

// 1. typeof
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase);
  } else {
    console.log(id)
  }
}

// 2. 平等缩小
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(didection: Direction) {
  if (didection === 'left') {
    console.log(didection)
  } else {
    console.log("...")
  }
}

// 3. instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time)
  }
}


class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

// 4. in
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming~")
  }
}

walk(fish)

export {}

