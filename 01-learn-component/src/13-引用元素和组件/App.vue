<template>
  <div>
    <h2 ref="title">hello navbar</h2>
    <nav-bar ref="navbar"></nav-bar>
    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
  import NavBar from "./NavBar.vue"
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ["abc", "ccc"]
      }
    },
    methods: {
      btnClick() {
        console.log(this.$refs.title)
        console.log(this.$refs.navbar.message)
        this.$refs.navbar.clickNavBar()

        // $el
        console.log(this.$refs.navbar.$el)
      }
    }
  }
</script>

<style scoped>

</style>