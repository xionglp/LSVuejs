<template>
  <div class="about">
    <h2>About</h2>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {

    }
  },
  created() {
    console.log("about created")
  },
  unmounted() {
    console.log("about unmounted")
  }
}
</script>

<style scoped>

</style>