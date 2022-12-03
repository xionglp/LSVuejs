<template>
  <div class="app">
    <button @click="counter++">+1</button>
    <!-- <h2 v-xionglp:kobe="message">hahaha</h2> -->

    <!-- 价格拼接单位符号 -->
    <h2 v-unit="'$'">123</h2>

  </div>
</template>



<script setup>
import { onMounted, ref } from 'vue';

const counter = ref(0)
const message = ref("abc...")

const vXionglp = {
  mounted(el, binding) {
    console.log(el)
    console.log(binding)
    el.textContent = binding.value
  }
}

</script>

<style scoped>

</style>