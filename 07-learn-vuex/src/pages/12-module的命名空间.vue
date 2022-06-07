<template>
  <div>
    <h2>counter: {{$store.state.rootCounter}}</h2>
    <h2>counter: {{$store.state.homeStore.homeCounter}}</h2>
    <h2>counter: {{$store.state.userStore.userCounter}}</h2>

    <hr>
    <h2>{{ $store.getters["homeStore/doubleHomeCounter"] }}</h2>
    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">homeAction+1</button>

  </div>
</template>

<script>

  export default {
    methods: {
      homeIncrement() {
        this.$store.commit("homeStore/increment")
      },
      homeIncrementAction() {
        this.$store.dispatch("homeStore/incrementAction")
      }
    }
  }
</script>

<style scoped>

</style>