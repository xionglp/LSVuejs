<template>
  <div class="app">
    <room-area :area-data="highScore"></room-area>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import RoomArea from "./components/RoomArea.vue"

  const highScore = ref({})
  setTimeout(() => {
    import("./data/high_score.json").then(res => {
      highScore.value = res.default
      console.log(highScore.value)
    })
  }, 100);

</script>

<!-- vue默认没有集成less-loader，需要手动导入less-loader库 -->
<style lang="less" scoped>
  .app {
    width: 1032px;
    margin: 0 auto;
    padding: 40px;    
  }
</style>
