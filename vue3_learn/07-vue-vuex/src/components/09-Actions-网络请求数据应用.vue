<template>
  <div class="home">
    <h2>home page</h2>
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<script setup>
  import { useStore } from 'vuex';

  const store = useStore()
  store.dispatch("fetchHomemultiDataAction")
  
</script>

<style scoped>
</style>