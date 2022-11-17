<template>
  <div class="app">
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>  
</template>

<script>
import { ref } from "vue"
import useCounter from "./hooks/useCounter"

export default {
  setup() {
    //1. 定义counter数据
    // const counter = ref(100)
    // const increment = () => {
    //   counter.value++
    // }

    // const decrement = () => {
    //   counter.value--
    // }

     const { counter, increment, decrement } =  useCounter()

    return {
      counter,
      increment,
      decrement
    }

  }
}
</script>

<style scoped>

</style>