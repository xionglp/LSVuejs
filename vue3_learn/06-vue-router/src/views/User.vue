<template>
  <div class="user">
    <!-- 模板中获取params参数 -->
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
  import { useRoute, onBeforeRouteUpdate } from "vue-router"

  const route = useRoute()
  console.log(route.params.id)

  onBeforeRouteUpdate((to, from) => {
    console.log("from", from.params.id)
    console.log("to", to.params.id)
  })
</script>

<style scoped>

</style>