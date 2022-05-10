<template>
  <div>
    <h2>Categray page</h2>
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "categray",
    data() {
      return {
        counter: 0
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>