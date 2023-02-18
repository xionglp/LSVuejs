<template>
  <div class="show-message">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认的title"
    }
  }
}
</script>

<style scoped>

</style>