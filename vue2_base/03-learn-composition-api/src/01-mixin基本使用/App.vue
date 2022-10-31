<template>
  <div>
    <h2>hello world</h2>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>

  import { demoMixin } from "./mixin/demoMixin.js"

  // mixin 混入
  export default {
    mixins: [demoMixin],
    data() {
      return {
        // message: "App demo"
      }
    },
    methods: {
      // foo() {
      //   console.log("App 按钮点击事件")
      // }
    },
    created() {
      console.log("App created")
    }
  }
</script>

<style scoped>

</style>