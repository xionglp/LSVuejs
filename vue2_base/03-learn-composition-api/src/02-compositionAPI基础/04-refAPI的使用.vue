<template>
  <div>
    Home page
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { ref } from "vue"

  // ref 会返回一个可变的响应式对象，该对象作为一个响应式的引用维护着内部的值
  // 在模板中引入ref的值， 会对其做自动解包，不需要在ref.value
  // 但在setup函数中，它仍然是一个ref引用，所以对其操作时，还要用ref.value

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    setup() {
      let counter = ref(100)

      // 局部函数
      const increment = () => {
        counter.value++;
        console.log(counter.value)
      }

      return {
        title: "hello home setup",
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>