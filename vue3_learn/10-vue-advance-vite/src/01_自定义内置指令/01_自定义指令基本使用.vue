<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef" /> -->
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        console.log("v-focus应用的元素被挂载了-vue2", el)
        el?.focus()
      }
    }
  }
}
</script>


<script setup>
import { onMounted, ref } from 'vue';
import useInput from "./hooks/useInput"

// 1.方式一: 定义ref绑定到input中, 调用focus
const { inputRef } = useInput()

// 2.方式二: 自定义指令(局部指令)
// const vFocus = {
//   mounted(el) {
//     console.log("v-focus应用的元素被挂载了", el)
//     el?.focus()

//   }
// }

</script>

<style scoped>

</style>