<template>
  <div class="app">
    <div class="tabs">
      <button v-for="item in btns" 
              :key="item" 
              :class="{active: currentTab === item}" 
              @click="tabClick(item)">
        {{ item }}
      </button>
    </div>
    <div class="view">
      <!-- include: 组件的名称来自于组件定义时name选项 -->
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent }  from "vue"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
// import Category from "./views/Category.vue"

// Vue中实现异步组件
const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))

export default {
  components: {
    Home,
    About,
    Category: AsyncCategory
  },
  data() {
    return {
      btns: ["home", "about", "category"],
      currentTab: "home"
    }
  },
  methods: {
    tabClick(tabName) {
      this.currentTab = tabName
    }
  }
}
</script>

<style scoped>
  .tabs .active {
    color: red;
  }
</style>