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
      <!-- 方法一： v-if进行判断 决定显示哪个组件 -->
      <!-- <template v-if="currentTab === 'home'">
        <home></home>
      </template>
      <template v-else-if="currentTab === 'about'">
        <about></about>
      </template>
      <template v-else-if="currentTab === 'category'">
        <category></category>
      </template> -->

      <component :is="currentTab" name="xionglp" :age="18" @homeBtnClick="homeEvent"></component>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Category from "./views/Category.vue"

export default {
  components: {
    Home,
    About,
    Category
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
    },
    homeEvent(payload) {
      console.log(payload)
    }
  }
}
</script>

<style scoped>
  .tabs .active {
    color: red;
  }
</style>