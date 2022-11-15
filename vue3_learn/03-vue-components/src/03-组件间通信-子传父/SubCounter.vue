<template>
  <div class="sub">
    <button @click="subClick(1)">-1</button>
    <button @click="subClick(5)">-5</button>
    <button @click="subClick(10)">-10</button>
  </div>
</template>

<script>
export default {
  emits: ["sub"],
  methods: {
    subClick(count) {
      this.$emit("sub", count)
    }
  }
}
</script>

<style scoped>

</style>