<template>
  <div>
    <h2>Home counter: {{ $store.state.counter }}</h2>
    <hr>
    <h2>Home counter: {{ counter }}</h2>
    <h2>Home name: {{ name }}</h2>
    <h2>Home age: {{ age }}</h2>
    <h2>Home height: {{sHeight}}</h2>
    <hr>
  </div>
</template>

<script>
  import { useState } from "../hooks/useState.js"

  export default {
    setup() {
      const storeState = useState(["counter", "name", "age"])
      const storeState2 = useState({
        sHeight: state => state.height
      })

      return {
        ...storeState,
        ...storeState2
      }
    }
  }
</script>

<style scoped>

</style>