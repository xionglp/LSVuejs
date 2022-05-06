<template>
  <div>

  </div>
</template>

<script>
  import emitter from "./utils/EventBus.js"
  import { AAA_EVENT, BBB_EVENT } from "./utils/constants.js"

  export default {
    created() {
      emitter.on(AAA_EVENT, (res) => {
        console.log(res)
      });

      emitter.on(BBB_EVENT, (res) => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>