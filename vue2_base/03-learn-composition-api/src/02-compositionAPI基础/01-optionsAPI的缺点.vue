<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>counter*2: {{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">+1</button>

  </div>
</template>

<script>
  // optionsAPI的缺点是代码比较分散，
  // composition API中提供了setup函数， 将同一个逻辑相关的代码都收集到一起
  export default {
    data() {
      return {
        counter: 100
      }
    },
    computed: {
      doubleCounter() {
        return this.counter * 2
      }
    },
    methods: {
      increment() {
        this.counter++;
      },
      decrement() {
        this.counter--;
      }
    },
    created() {
      console.log("home created")
    }
  }
</script>

<style scoped>

</style>