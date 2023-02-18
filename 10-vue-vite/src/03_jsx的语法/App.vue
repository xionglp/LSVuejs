<template>
  <jsx/>
</template>

<script lang="jsx" setup>
import { ref } from "vue";
import About from "./About.vue"

const counter = ref(0)
const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}

const jsx = () => (
  <div class="app">
    <h2 class="title">当前计数: { counter.value }</h2>
    <button onClick={ increment }>+1</button>
    <button onClick={ decrement }>-1</button>
  </div>
)

// export default {
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   render() {
//     return (
//       <div class="app">
//         <h2 class="title">当前计数: { this.counter }</h2>
//         <button onClick={ this.increment }>+1</button>
//         <button onClick={ this.decrement }>-1</button>
//       </div>
//     )
//   },
//   methods: {
//     increment() {
//       this.counter++
//     },
//     decrement() {
//       this.counter--
//     }
//   }
// }
</script>

<style lang="less" scoped>

</style>