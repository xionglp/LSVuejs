<template>
  <div class="counter2">
    <h2>counter: {{ counter }}</h2>
    <button @click="changeCounter">修改counter</button>

    <h2>name: {{ name }}</h2>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 23
    },
    name: {
      type: String,
      default: "xionglp"
    }
  },
  methods: {
    changeCounter() {
      this.$emit("update:counter", 200)
    },
    changeName() {
      this.$emit("update:name", "hahaha")
    }
  }
}
</script>

<style scoped>

</style>