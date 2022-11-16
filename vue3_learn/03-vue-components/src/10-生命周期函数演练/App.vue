<template>
  <div class="app">
    <h2>{{ message }} - {{ counter }}</h2>
    <button @click="changeMessage">修改message</button>
    <button @click="addCount">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello world",
      counter: 0
    }
  },
  methods: {
    changeMessage() {
      this.message = "hello xionglp"
    },
    addCount() {
      this.counter++
    }
  },
  beforeCreate() {
    console.log("组件创建之前")
  },
  created() {
    console.log("组件创建完成")
    console.log("发送网络请求，监听数据")
  },
  beforeMount() {
    console.log("组件挂载之前")
  },
  mounted() {
    console.log("组件挂载完成")
    console.log("获取dom，使用dom")
  },
  beforeUpdate() {
    console.log("组件更新之前")
  },
  updated() {
    console.log("组件更新完成")
  },
  beforeUnmount() {
    console.log("组件卸载之前")
  },
  unmounted() {
    console.log("组件卸载完成")
  }
}
</script>

<style scoped>

</style>