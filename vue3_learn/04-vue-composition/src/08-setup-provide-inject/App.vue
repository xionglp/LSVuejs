<template>
  <div class="app">
    <h2>name: {{ name }}</h2>
    <button @click="changeName">修改name</button>
    <show-info></show-info>
  </div>
</template>

<script>
import { ref, provide } from "vue"
import ShowInfo from "./ShowInfo"

export default {
  components: {
    ShowInfo
  },
  setup() {
    const name = ref("xionglp")

    provide("name", name)
    provide("age", 18)
    provide("height", 1.88)

    function changeName() {
      name.value = "james"
    }

    return {
      name,
      changeName
    }
  }
}
</script>

<style scoped>
</style>