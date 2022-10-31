<template>
  <div>
    <h2>Not Found Page</h2>
    <p>您打开的路径页面不存在, 请输入正确的路径~</p>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.params)
    }
    
  }
</script>

<style scoped>

</style>