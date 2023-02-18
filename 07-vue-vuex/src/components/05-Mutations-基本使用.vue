<template>
  <div class="home">
    
    <h2>store Name: {{ $store.state.name }}</h2>
    <h2>store Level: {{ $store.state.level }}</h2>

    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
  export default {
    methods: {
      changeName() {
        this.$store.commit("changeName", "james")
      },
      incrementLevel() {
        this.$store.commit("incrementLevel")
      },
      changeInfo() {
        this.$store.commit("changeInfo", {name: "curry", level: 299})
      }
    }
  }
</script>

<script setup>


</script>

<style scoped>

</style>