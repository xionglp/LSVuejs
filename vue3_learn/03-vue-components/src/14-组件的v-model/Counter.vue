<template>
  <div class="counter">
    <h2>{{ modelValue }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 20
    }
  },
  emit: ["update:modelValue"],
  methods: {
    changeCounter() {
      this.$emit("update:modelValue", 999)
    }
  }
}
</script>

<style scoped>

</style>