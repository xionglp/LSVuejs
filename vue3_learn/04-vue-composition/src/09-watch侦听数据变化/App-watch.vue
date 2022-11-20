<template>
  <div class="app">
    <h2>message: {{ message }}</h2>
    <h2>info: {{ info }}</h2>
    <button @click="changeMessage">修改message</button>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    // 1.定义数据
    const message = ref("hello world")
    const info = reactive({
      name: "xionglp",
      age:18,
      height: 1.88,
      friend: {
        name: "james"
      }
    })

    function changeMessage() {
      message.value = "hello vue.js"
    }

    function changeName() {
      info.friend.name = "kobe bryant"
    }

    // 2.侦听数据变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    // watch(info, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // 侦听reactive数据变化后，获取到普通对象
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {
      immediate: true,
      deep: true
    })

    return {
      message,
      info,
      changeMessage,
      changeName
    }
  }
}
</script>

<style scoped>

</style>