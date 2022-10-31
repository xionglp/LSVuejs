<template>
  <div>
    <async-about></async-about>
  </div>
</template>

<script>

  import { defineAsyncComponent } from "vue"
  // import AsyncAbout from "./AsyncAbout.vue"

  // 异步组件
  const AsyncAbout = defineAsyncComponent(() => import("./AsyncAbout.vue"))

  export default {
    components: {
      AsyncAbout
    }
  }
</script>

<style scoped>

</style>