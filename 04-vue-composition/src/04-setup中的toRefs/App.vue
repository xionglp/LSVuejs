<template>
  <div class="app">
    <!-- <h2>info: {{ info.name }} - {{ info.age }}</h2> -->

    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>height: {{ height }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue"

export default {
  setup() {
    const info = reactive({
      name: "xionglp",
      age: 18,
      height: 1.88
    })

    // reactive对象进行解构会变成普通的值，失去响应式
    const { name, age } = toRefs(info)
    const { height } = toRef(info, "height")

    return {
      info,
      name,
      age,
      height
    }
  }
}
</script>

<style scoped>

</style>