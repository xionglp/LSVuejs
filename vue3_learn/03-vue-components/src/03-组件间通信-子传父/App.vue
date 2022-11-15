<template>
  <div class="app">
    <h2>当前计数: {{ counter }}</h2>
    <add-counter @addCounter="addCounter"></add-counter>
    <sub-counter @sub="subCounter"></sub-counter>
  </div>
</template>

<script>
import AddCounter from "./AddCounter.vue"
import SubCounter from "./SubCounter.vue"
  
export default {
  components: {
    AddCounter,
    SubCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addCounter(count) {
      this.counter += count
    },
    subCounter(count) {
      this.counter -= count
    }
  }
}
</script>

<style scoped>

</style>