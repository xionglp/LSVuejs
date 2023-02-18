<template>
  <div class="home">
    <h2>counter: {{ counterStore.count }}</h2>
    <h2>count: {{ count }}</h2>
    <button @click="incrementCount">+1</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { storeToRefs } from "pinia"
import useCounter from '@/stores/counter';

const counterStore = useCounter()
// const { count } = toRefs(counterStore)
const { count } = storeToRefs(counterStore)

function incrementCount() {
  counterStore.count++
}

</script>

<style lang="less" scoped>

</style>