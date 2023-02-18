<template>
  <div class="home">
    <h2>home page</h2>
    
    <!-- 1.使用state时, 是需要state.moduleName.xxx -->
    <h2>count模块中的count: {{ $store.state.countModule.count }}</h2>
    <!-- 2.使用getters使直接getters.xxx -->
    <!-- 对应的模块使用了namespaced: true, 需要加上模块名称 -->
    <h2>count模块中的doubleCount: {{ $store.getters["countModule/doubleCount"] }}</h2>
    <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<script setup>
  import { useStore } from 'vuex';

  const store = useStore()
  function incrementCount() {
    store.dispatch("countModule/incrementCountAction")
  }
  
</script>

<style scoped>
</style>