<template>
  <div id="app">
    <h2>App: {{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">+1</button>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {

    }
  },
  methods: {
    increment() {
      this.$store.commit("increment")
    },
    decrement() {
      this.$store.commit("decrement")
    }
  }
}
</script>

<style>
</style>
