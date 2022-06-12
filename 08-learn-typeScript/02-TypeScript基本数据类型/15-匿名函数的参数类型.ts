const names = ["abc", "ccc", "ddd"];

// 上下文中的函数可以不添加类型注解，
// item根据上下文的环境推导出来， 
names.forEach((item: string) => {
  console.log(item.split(""))
})

export {}