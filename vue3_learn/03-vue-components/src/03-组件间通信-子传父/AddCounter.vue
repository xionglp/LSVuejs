<template>
  <div class="add">
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  emits: ["addCounter"],
  methods: {
    addClick(count) {
      console.log(count)
      this.$emit("addCounter", count)
    }
  }
}
</script>

<style scoped>

</style>