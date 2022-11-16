<template>
  <div class="app">
    <tab-control :tabNames="tabs" @tabClick="tabClick">
      <!-- v-slot:default接收数据 -->
      <template v-slot:default="props">
        <!-- <button>{{props.item}}</button> -->
        <a href="#">{{props.item}}</a>
      </template>
    </tab-control>

    <tab-control :tabNames="tabs" @tabClick="tabClick">
      <!-- 另一种写法，或者v-slot="props" -->
      <template #default="props">
        <a href="#">{{props.item}}</a>
      </template>
    </tab-control>

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