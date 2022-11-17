<template>
  <div class="home">
    <h2>Home组件</h2>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">homeBtn</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return ""
      }
    },
    age: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  emit: ["homeBtnClick"],
  data() {
    return {

    }
  },
  methods: {
    homeBtnClick() {
      this.$emit("homeBtnClick", "homePage")
    }
  }
}
</script>

<style scoped>

</style>