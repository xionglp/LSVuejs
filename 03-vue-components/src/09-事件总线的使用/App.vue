<template>
  <div class="app">
    <home></home>

    <button @click="changeShowCategory">切换显示category</button>
    <category v-if="isShowCategory"></category>
  </div>
</template>

<script>
import eventBus from "./utils/event-bus"
import Home from "./Home.vue"
import Category from "./Category.vue"

export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      isShowCategory: true
    }
  },
  methods: {
    changeShowCategory() {
      this.isShowCategory = !this.isShowCategory
    }
  },
  // 监听事件总线
  created() {
    eventBus.on("homeBannerEvent", (name, age, height) => {
      console.log(name, age, height)
    })
  }
}
</script>

<style scoped>

</style>