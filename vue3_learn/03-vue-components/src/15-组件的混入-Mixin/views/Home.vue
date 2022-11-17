<template>
  <div class="home">
    <h2>home组件</h2>
  </div>
</template>

<script>
import messageMixin from "../mixins/message-mixin"

export default {
  mixins: [messageMixin],
  data() {
    return {
      homeNames: ["aaa", "bbb"]
    }
  },
  created() {
    console.log("home homeNames")
  }
}
</script>

<style scoped>

</style>