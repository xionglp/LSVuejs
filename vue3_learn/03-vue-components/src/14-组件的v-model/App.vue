<template>
  <div class="app">
    <h2>message: {{ message }}</h2>
    <!-- 1.input 组件的双向绑定 -->
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" :value="message" @input="changeMessage"> -->

    <!-- 组件的v-model -->
    <!-- <counter v-model="appCounter"></counter> -->
    <counter :modelValue="appCounter" @update:modelValue="updateModelValue"></counter>

    <!-- <counter2 v-model:counter="appCounter" v-model:name="appName"></counter2> -->

  </div>
</template>

<script>
import Counter from "./Counter.vue"
import Counter2 from "./Counter2.vue"

export default {
  components: {
    Counter,
    Counter2
  },
  data() {
    return {
      message: "hello world",
      appCounter: 100,
      appName: "kkk"
    }
  },
  methods: {
    changeMessage(event) {
      console.log(event.target.value)
      this.message = event.target.value
    },
    updateModelValue(payload) {
      this.appCounter = payload
    }
  }
}
</script>

<style scoped>

</style>