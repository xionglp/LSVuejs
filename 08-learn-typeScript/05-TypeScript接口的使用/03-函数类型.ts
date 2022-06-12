interface calcFn {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, fn: calcFn) {
  return fn(num1, num2);
}

const add: calcFn = (num1, num2) => {
  return num1 + num2
}

console.log(calc(100, 200, add))

export{}