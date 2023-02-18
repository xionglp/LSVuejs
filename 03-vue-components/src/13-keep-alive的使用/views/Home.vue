<template>
  <div class="home">
    <h2>Home组件</h2>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  },
  created() {
    console.log("home created")
  },
  unmounted() {
    console.log("home unmounted")
  },
  // 进入活跃状态
  activated() {
    console.log("home activated")
  },
  // 进入非活跃状态
  deactivated() {
    console.log("home deactivated")
  }
}
</script>

<style scoped>

</style>