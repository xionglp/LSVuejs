class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p1 = new Point('1.32', '2.22', '3.33')
const p2 = new Point<number>(2.22, 3.33, 4.33)

const names1: string[] = ['aaa', 'bbb', 'ccc']
const names2: Array<string> = ['bbb', 'ccc', 'ddd']
