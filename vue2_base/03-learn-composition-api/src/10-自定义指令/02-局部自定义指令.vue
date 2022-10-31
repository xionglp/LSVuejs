<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>

  export default {
    // 局部指令
    directives: {
      focus: {
        mounted(el, bindings) {
          console.log("foucs mounted")
          console.log(el, bindings)
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>