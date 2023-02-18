<template>
  <div class="app">
    <navbar>
      <template v-slot:left>
        <button>返回</button>
      </template>
      <template v-slot:center>
        <div>个人中心</div>
      </template>
      <template #right>
        <div>更多</div>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>