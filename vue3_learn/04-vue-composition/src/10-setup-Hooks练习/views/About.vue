<template>
  <div class="about">
    <h2>About当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    function increment() {
      counter.value++
    }

    function decrement() {
      counter.value--
    }

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