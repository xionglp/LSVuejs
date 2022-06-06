<template>
  <div>
    <hr>
      <h2>总价: {{$store.getters.totalPrice}}</h2>
      <h2>总价: {{$store.getters.totalPriceCountGreaterN(1)}}</h2>
    <hr>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>