<template>
  <div class="app">
    <h2 ref="titleRef" class="title" :style="{color: titleColor}">{{ message }}</h2>
    <button ref="buttonRef" @click="changeMessage">修改message</button>

    <banner ref="bannerRef"></banner>
  </div>
</template>

<script>
import Banner from "./Banner.vue"

export default {
  components: {
    Banner
  },
  data() {
    return {
      message: "hello world",
      titleColor: 'red'
    }
  },
  methods: {
    changeMessage() {
      this.message = "hello xionglp"

      // 获取h2/button元素
      console.log(this.$refs.titleRef)
      console.log(this.$refs.buttonRef)

      // 获取子组件实例
      console.log(this.$refs.bannerRef.$el)

      // 父组件中主动的调用子组件的对象方法
      this.$refs.bannerRef.bannerClick()

      // 获取父组件和获取根组件
      console.log(this.$parent)
      console.log(this.$root)
    }
  }
}
</script>

<style scoped>

</style>