<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <h2>name: {{ $store.state.name }}</h2>

    <button @click="counterBtnClick">发起action修改counter</button>
    <button @click="nameBtnClick">发起action修改name</button>
  </div>
</template>

<script>
  export default {
    methods: {
      counterBtnClick() {
        // actions 用来做异步，派发
        this.$store.dispatch("incrementCounterAction")
      },
      nameBtnClick() {
        this.$store.dispatch("changeNameAction", "kobe bryant")
      }
    }
  }
</script>

<script setup>
</script>

<style scoped>
</style>