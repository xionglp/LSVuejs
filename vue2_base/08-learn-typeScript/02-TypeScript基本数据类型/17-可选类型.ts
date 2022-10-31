function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
}

printPoint({x: 22, y: 33});
printPoint({x: 10, y: 20, z: 30})

export {}