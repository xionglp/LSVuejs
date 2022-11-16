<template>
  <div class="home-banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
import eventBus from "./utils/event-bus"
export default {
  data() {
    return {

    }
  },
  methods: {
    bannerBtnClick() {
      eventBus.emit("homeBannerEvent", "xionglp", 18, 1.98)
    }
  }
}
</script>

<style scoped>

</style>