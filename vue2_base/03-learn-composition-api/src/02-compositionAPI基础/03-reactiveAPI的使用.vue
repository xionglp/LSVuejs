<template>
  <div>
    Home page
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <h2>当前计数：{{state.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { reactive } from "vue"

  // reactive() 只能接收对象或者组数类型
  // 基本数据类型 可以使用ref()

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    setup() {
      const state = reactive({
        counter: 100
      })

      // 局部函数
      const increment = () => {
        state.counter++
        console.log(state.counter)
      }

      return {
        title: "hello home setup",
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>