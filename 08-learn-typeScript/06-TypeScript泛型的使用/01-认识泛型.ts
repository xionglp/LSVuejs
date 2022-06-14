// 类型的参数化
// 在定义这个函数时，我不决定这些参数的类型
// 而是让调用者以参数的形式告知我这里的函数参数是什么类型
function sum<Type>(num: Type): Type {
  return num
}

sum<number>(20)
sum<{ name: string }>({ name: 'xionglp' })

sum(50)
sum('abc')
