<template>
  <div class="app">
    <h2>message: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>

    <show-info 
              name="xionglp" 
              :age="age" 
              @change-age-event="changeAgeEvent" 
              ref="showInfoRef">
    </show-info>
    <ShowInfo></ShowInfo>
  </div>
</template>

<script setup>
  // 1.所有编写在顶层的代码都会暴露给template使用
  import { onMounted, ref } from "vue";
  import ShowInfo from "./ShowInfo.vue"

  // 2.定义响应式数据
  const message = ref("hello world")
  const age = ref(78)
  console.log(message.value)

  // 3.定义绑定的函数
  function changeMessage() {
    message.value = "kobe bryant"
  }

  function changeAgeEvent(payload) {
    console.log("payload---", payload)
    age.value = 33
  }

  // 4.获取组件实例
  const showInfoRef = ref()

  onMounted(() => {
    console.log(showInfoRef)
    showInfoRef.value.foo()
  })

</script>

<style scoped>

</style>