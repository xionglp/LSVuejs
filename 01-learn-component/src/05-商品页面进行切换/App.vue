<template>
  <div>
    <tab-control :names="names" @clickItem="clickItem"></tab-control>
    <h2>{{contents[currentIndex]}}</h2>
  </div>
</template>

<script>
  import TabControl from "./TabControl.vue";

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        names: ["衣服", "裤子", "鞋子"],
        contents: ["衣服页面", "裤子页面", "鞋子页面"],
        currentIndex: 0
      }
    },
    methods: {
      clickItem(payload) {
        this.currentIndex = payload
      }
    }
  }
</script>

<style scoped>

</style>