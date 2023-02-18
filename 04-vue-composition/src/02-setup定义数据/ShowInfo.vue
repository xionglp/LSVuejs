<template>
  <div class="show-info">
    <h2>名称: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>