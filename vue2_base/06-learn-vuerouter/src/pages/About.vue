<template>
  <div>
    <h2>About page</h2>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.query);
    }
  }
</script>

<style scoped>

</style>