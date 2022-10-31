<template>
  <div class="app">
    <navigation-bar :name="name">
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template #center>
        <div>我是标题</div>
      </template>
      <template #[name]>
        <i>右边元素</i>
      </template>
    </navigation-bar>
  </div>
</template>

<script>

  import NavigationBar from './NavigationBar.vue'

  export default {
    components: {
      NavigationBar
    },
    data() {
      return {
        name: "why"
      }
    }
  }
</script>

<style scoped>

</style>