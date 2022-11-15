<template>
  <div class="app">
    <!-- 1. 如果当前属性是一个非prop的attribute， 那么该属性会默认添加到子组件的根元素上 -->
    <show-info :name="'xionglp'" :age="28" :height="1.78" abc="cba" class="active"></show-info>

    <show-info name="kobe" :age="22" :showMessage="'hahaha'" :friends="friend" />
  </div>
</template>

<script>
import ShowInfo from './components/ShowInfo.vue'

export default {
  components: {
    ShowInfo,
  },
  data() {
    return {
      friend: {
        name: 'curry',
      },
    }
  },
}
</script>

<style scoped>
</style>