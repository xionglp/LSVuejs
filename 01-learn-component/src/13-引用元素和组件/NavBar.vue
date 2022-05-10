<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "NavBar组件中的message消息"
      }
    },
    methods: {
      getParentAndRoot() {
        console.log(this.$parent) // 获取父组件
        console.log(this.$root) // 获取根组件
      },
      clickNavBar() {
        console.log("hello NavBar")
      }
    }
  }
</script>

<style scoped>

</style>