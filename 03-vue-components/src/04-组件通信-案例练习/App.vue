<template>
  <div class="app">
    <tab-control :tabNames="tabs" @tabClick="tabClick"></tab-control>

    <h1>{{ pageContents[currentIndex] }}</h1>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue"

export default {  
  components: {
    TabControl
  },
  data() {
    return {
      tabs: ["上衣", "裤子", "鞋子"],
      pageContents: ["上衣列表", "裤子列表", "鞋子列表"],
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

</style>