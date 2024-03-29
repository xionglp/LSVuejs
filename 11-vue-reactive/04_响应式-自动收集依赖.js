/**
  * 1.dep对象数据结构的管理(最难理解)
    * 每一个对象的每一个属性都会对应一个dep对象
    * 同一个对象的多个属性的dep对象是存放一个map对象中
    * 多个对象的map对象, 会被存放到一个objMap的对象中
  * 2.依赖收集: 当执行get函数, 自动的添加fn函数
 */

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  // 收集依赖
  addDepend(fn) {
    if(fn) {
      this.reactiveFns.push(fn)
    }
  }

  // 通知
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name: "xionglp",
  age: 18
}

// 设置一个专门执行响应式函数的一个函数
// const dep = new Depend()
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  // dep.addDepend(fn)
  fn()
  reactiveFn = null
}

// 封装一个函数: 负责通过obj的key获取对应的depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据obj对象，找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key，找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }
  return dep
}

// 方案一: Object.defineProperty() -> vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set(newValue) {
      value = newValue
      // 监听属性的变化,set方法中执行通知收集的依赖
      // dep.notify()
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get() {
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)
      return value
    }
  })
})

// 方案二: new Proxy() -> vue3


watchFn(function foo() {
  console.log("foo function")
  console.log("foo: ", obj.name)
  console.log("foo: ", obj.age)
})
watchFn(function bar() {
  console.log("bar function")
  console.log("bar:", obj.age + 10)
})

// 修改obj对象的属性
console.log("----------------------")
obj.name = "kobe"
// obj.age = 30
