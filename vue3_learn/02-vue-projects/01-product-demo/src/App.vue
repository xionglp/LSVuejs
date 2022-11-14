<template>
  <div>
    <h3>{{ message }}</h3>
    <h3>当前计数: {{ counter }}</h3>

    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    // ProductItem,
    AppHeader,
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
