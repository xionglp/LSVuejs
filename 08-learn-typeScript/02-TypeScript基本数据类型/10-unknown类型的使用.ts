// unkonwn类型只能赋值给unknown和any类型
// any类型可以赋值给任意类型

function foo() {
  return "abc"
}

function bar() {
  return 123
}

let flag = true;
let result: unknown
if (flag) {
  result = foo()
} else {
  result = bar()
}
let message: unknown = result

console.log(message);

export {}