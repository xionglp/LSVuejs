<template>
  <div class="app">
    <render></render>
    <h2>内容</h2>
  </div>
</template>

<!-- <script>
import { h } from "vue"
import Home from "./Home.vue"

export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {
    return h("div", { className: "app" }, [
      h("h2", null, `当前计数: ${ this.counter }`),
      h("button", { onClick: this.increment }, "+1"),
      h("button", { onClick: this.decrement }, "-1"),
      h(Home)
    ])
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script> -->

<script setup>
import { h, ref } from 'vue'
import Home from "./Home.vue"

const counter = ref(0)
const increment = () => {
  counter.value++
}
const decrement = () => {
  counter--
}

const render = () => h("div", { className: "app" }, [
  h("h2", null, `当前计数: ${counter.value}`),
  h("button", { onClick: increment }, "counter+1"),
  h("button", { onClick: decrement }, "counter-1"),
  h(Home)
])


</script>

<style scoped>

</style>