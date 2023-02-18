<template>
  <div class="app">
    <home></home>

    <div> {{ message }} </div>
    <button @click="changeMessage">修改message</button>


  </div>
</template>

<script>
import { computed } from "vue"
import Home from "./Home.vue"

export default {
  components: {
    Home
  },
  provide() {
    return {
      name: "xionglp",
      age: 18,
      height: 1.88,
      message: computed(() => {
        return this.message
      })
    }
  },
  data() {
    return {
      message: "hello App",
    }
  },
  methods: {
    changeMessage() {
      this.message = "hello xionglp"
    }
  }
}
</script>

<style scoped>

</style>