<template>
  <div>
    <h3>{{ message }}</h3>
    <h3>当前计数: {{ counter }}</h3>

    <product-item></product-item>
    <product-item></product-item>
  </div>
</template>

<script>
import ProductItem from './components/ProductItem.vue'

export default {
  name: 'App',
  components: {
    ProductItem,
  },
  data() {
    return {
      message: '我是初始标题',
      counter: 2,
    }
  },
}
</script>

<style>
</style>
