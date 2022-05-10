<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <ls-input v-model="message" v-model:title="title"></ls-input>

    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  import LsInput from "./LsInput.vue"

  export default {
    components: {
      LsInput
    },
    data() {
      return {
        message: "xionglp",
        title: "hahaha"
      }
    }
  }
</script>

<style scoped>

</style>