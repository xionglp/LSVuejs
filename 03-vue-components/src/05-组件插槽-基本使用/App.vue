<template>
  <div class="app">
    <show-message title="ShowMessage Title">
      <!-- <button>按钮元素</button> -->
      <a href="#">百度一下</a>
    </show-message>

    <show-message>
      <img src="@/assets/kobe02.png" alt="">
    </show-message>

  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue"

export default {
  components: {
    ShowMessage
  }
}
</script>

<style scoped>

</style>