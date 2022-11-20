<template>
  <div class="app">
    <!-- 1.计数器 -->
    <!-- <home></home>
    <hr>
    <about></about> -->

    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>
    
    <component :is="currentPage"></component>


  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Home from "./views/Home.vue"
import About from "./views/About.vue"

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref("home")

    watch(currentPage, (newValue) => {
      if (newValue === "home") {
        document.title = "首页"
      } else if (newValue === "about") {
        document.title = "关于"
      }
    })
    return {
      currentPage,
    }
  }
}
</script>

<style scoped>

</style>