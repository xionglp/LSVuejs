<template>
  <div class="app">
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from "./views/Home"
import About from "./views/About.vue"

export default {
  components: {
    Home,
    About
  }
}
</script>

<style scoped>

</style>