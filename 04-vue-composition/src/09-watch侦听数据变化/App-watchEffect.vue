<template>
  <div class="app">
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <button @click="increment">+1</button>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const counter = ref(0)
    const name = ref("xionglp")

    function increment() {
      counter.value++
    }

    function changeName() {
      name.value = "james"
    }

    // watchEffect传入的函数默认会执行
    // 在执行的过程中，会自动收集依赖，依赖哪些响应式的数据
    watchEffect(() => {
      console.log("-------", counter.value, name.value)
    })

    return {
      counter,
      name,
      changeName,
      increment
    }

  }
}
</script>

<style scoped>

</style>