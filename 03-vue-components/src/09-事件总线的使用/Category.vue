<template>
  <div class="category">
    <h2>Category</h2>
  </div>
</template>

<script>
import eventBus from "./utils/event-bus"

export default {
  methods: {
    homeBannerEventHandler() {
      console.log("homeBannerEvent在Category的监听")
    }
  },
  created() {
  },
  mounted() {
    eventBus.on("homeBannerEvent", this.homeBannerEventHandler)
  },
  unmounted() {
    console.log("category unmounted")
    eventBus.off("homeBannerEvent", this.homeBannerEventHandler)
  }
}
</script>

<style scoped>

</style>