<template>
  <div>
    Home page
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <h2>当前计数：{{counter}}</h2>
    <h2>当前计数1：{{info.counter}}</h2>
    <h2>当前计数2：{{reactiveInfo.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { ref, reactive } from "vue"

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    setup() {
      let counter = ref(100)

      const info = {
        counter: 100
      }

      const reactiveInfo = reactive({
        counter: 100
      })

      // 局部函数
      const increment = () => {
        counter.value++;
        
      }

      return {
        title: "hello home setup",
        counter,
        info,
        reactiveInfo,
        increment
      }
    }
  }
</script>

<style scoped>

</style>