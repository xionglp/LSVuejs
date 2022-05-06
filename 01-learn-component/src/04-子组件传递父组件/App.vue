<template>
  <div>
    <h2>{{counter}}</h2>
    <counter-operation @add="addNum" @sub="subNum" @addN="addNumN"></counter-operation>
  </div>
</template>

<script>
  import CounterOperation from './CounterOperation.vue'

  export default {
    components: {
      CounterOperation
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addNum() {
        this.counter++;
      },
      subNum() {
        this.counter--;
      },
      addNumN(payload) {
        this.counter += payload
      }
    }
  }
</script>

<style scoped>

</style>