function foo() {
  console.log("foo")
}

type FooFnType = () => void
function bar(fn: FooFnType) {
  fn()
}

bar(foo)

type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2;
}

console.log(add(10, 20))