<template>
  <div class="home">
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.getFriendById(112) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>

  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter'

  const counterStore = useCounter()

</script>

<style lang="less" scoped>
</style>