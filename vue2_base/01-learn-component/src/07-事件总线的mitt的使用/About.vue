<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
  import emitter from "./utils/EventBus.js"
  import { AAA_EVENT, BBB_EVENT } from "./utils/constants.js"

  export default {
    data() {
      return {}
    },
    methods: {
      btnClick() {
        emitter.emit(AAA_EVENT, {name: "xionglp", age: 18})
        emitter.emit(BBB_EVENT, {address: "深圳市", height: 1.99})
      }
    }
  }
</script>

<style scoped>

</style>