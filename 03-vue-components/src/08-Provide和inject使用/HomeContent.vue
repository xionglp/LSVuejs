<template>
  <div class="home-content">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
    <h2>{{ message.value }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  inject: ["name", "age", "height", "message"]
}
</script>

<style scoped>

</style>