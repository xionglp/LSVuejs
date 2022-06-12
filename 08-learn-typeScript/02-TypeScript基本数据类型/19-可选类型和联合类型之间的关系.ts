// 可选类型 其实就是 类型 | undefined 的联合类型

// function foo(message: string | undefined) {
//   return message;
// }

function foo(message?: string) {
  return message;
}

console.log(foo())

export {}