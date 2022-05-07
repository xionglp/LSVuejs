<template>
  <div class="show-name">
    <div v-for="(item, index) in names" :key="item">
      <!-- <span>{{item}} - {{index}}</span> -->
      <!-- 作用域插槽 prop -->
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>