<template>
  <div>
    <h2>counter: {{$store.state.rootCounter}}</h2>
    <h2>counter: {{$store.state.homeStore.homeCounter}}</h2>
    <h2>counter: {{$store.state.userStore.userCounter}}</h2>

  </div>
</template>

<script>

  export default {
    setup() {
    
      return {
      }
    }
  }
</script>

<style scoped>

</style>