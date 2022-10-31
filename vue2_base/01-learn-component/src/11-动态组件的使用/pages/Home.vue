<template>
  <div @click="pageClick">
    <h2>Home page</h2>
    <span>{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: "home",
    emits: ['pageClick'],
    props: {
      name: {
        type: String,
        default: "home"
      }
    },
    methods: {
      pageClick() {
        this.$emit("pageClick")
      }
    }
  }
</script>

<style scoped>

</style>