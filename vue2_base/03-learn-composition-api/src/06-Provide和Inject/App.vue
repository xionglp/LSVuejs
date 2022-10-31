<template>
  <div>
    <home></home>

    <h2>App counter: {{counter}}</h2>
    <button @click="increment">App中+1</button>

  </div>
</template>

<script>
  import Home from "./Home.vue"
  import { ref, provide, readonly } from "vue"

  export default {
    components: {
      Home
    },
    setup() {
      const name = ref("xionglp")
      const counter = ref(100)

      provide("name", readonly(name))
      provide("counter", readonly(counter))

      const increment = () => {
        counter.value ++
      }

      return {
        name,
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>