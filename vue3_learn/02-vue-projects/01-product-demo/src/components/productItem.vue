<template>
  <div class="product">
    <h2>我是商品标题</h2>
    <p>我是商品详情描述信息</p>
    <div>价格: ￥{{ price }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  components: {},
  data() {
    return {
      price: 10.4,
    }
  },
}
</script>

<style>
.product {
  background-color: orange;
}
</style>