<template>
  <div class="app">
    <button v-for="(item, index) in btns" 
            :key="index" 
            @click="clickItem(item)" 
            :class="{active: currentTab === item}">
      {{item}}
    </button>

    <!-- 只有名称匹配的组件才会缓存 -->
    <keep-alive :include="['home', 'about']">
      <component :is="currentTab" name="xionglp" @pageClick="pageClick"></component>
    </keep-alive>
  
    <!-- 利用v-if进行判断 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-if="currentTab === 'categray'">
      <categray></categray>
    </template> -->

  </div>
</template>

<script>
  import Home from "./pages/Home.vue"
  import Categray from "./pages/Categray.vue"
  import About from "./pages/About.vue"

  export default {
    components: {
      Home,
      Categray,
      About
    },
    data() {
      return {
        btns: ["home", "about", "categray"],
        currentTab: "home"
      }
    },
    methods: {
      clickItem(item) {
        this.currentTab = item
      },
      pageClick() {
        console.log("home page click")
      }
    }
  }
</script>

<style scoped>

.active {
  color: #f00;
}

</style>