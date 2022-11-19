<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr>

    <h2>账号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeAccount">修改账号</button>
    <hr>

    <!-- 默认情况下在template中使用ref，vue会自动对其进行解包（取出value值） -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="counter++">+1</button>

    <hr>
    <h2>当前计数: {{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue"

export default {
  setup() {
    // 1.定义普通的数据，不能够响应式
    let message = "hello world"
    function changeMessage() {
      message = "hello vue.js"
      console.log(message)
    }

    // 2.定义响应式数据
    // 2.1reactive函数: 定义复杂类型的响应式数据
    const account = reactive({
      username: "xionglp",
      password: "123456"
    })
    function changeAccount() {
      account.username = "kobe"
    }

    // 2.2ref函数: 定义简单的数据类型（也可以定义复杂的数据类型）
    // 一般后台请求到的数据用ref接受
    let counter = ref(0)
    function increment() {
      counter.value++
    }

    // ref是浅成解包
    const info = {
      counter
    }

    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      increment,
      info
    }

  }
}
</script>

<style scoped>

</style>