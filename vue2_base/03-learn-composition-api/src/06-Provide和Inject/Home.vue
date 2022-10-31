<template>
  <div>
    <h2>Home: {{name}}</h2>
    <h2>Home: {{counter}}</h2>

    <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script>
  import { inject } from "vue"

  export default {
    setup() {
      const name = inject("name")
      let counter = inject("counter")

      const homeIncrement = () => {
        counter.value++
      }

      return {
        name,
        counter,
        homeIncrement
      }
    }
  }
</script>

<style scoped>

</style>