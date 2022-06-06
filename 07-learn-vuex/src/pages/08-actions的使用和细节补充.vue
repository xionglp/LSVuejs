<template>
  <div>
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

  </div>
</template>

<script>

  export default {
    mounted() {
      this.$store.dispatch("getHomeMultiData")
    },
    methods: {
      increment() {
        this.$store.dispatch("incrementAction", {count: 1000, name: "kobe"})
      },
      decrement() {
        this.$store.dispatch({
          type: "decrementAction",
          count: 200,
          name: "coderwhy"
        })
      }
    }
  }
</script>

<style scoped>

</style>