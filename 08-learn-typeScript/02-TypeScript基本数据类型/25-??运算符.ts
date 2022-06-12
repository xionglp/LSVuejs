// ?? 空值合并操作符  当操作符的左侧是null 或者 undefined时返回其右侧操作数， 否则返回其左侧操作数

// let message: string | null = "hello world"
let message = null
const content = message ?? "hello vue.js"

console.log(content)

export {}