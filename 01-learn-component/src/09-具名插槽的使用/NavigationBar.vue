<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
  }
  .left, .right {
    width: 80px;
    background-color: antiquewhite;
  }
  .center {
    flex: 1;
    background-color: aquamarine;
  }
</style>