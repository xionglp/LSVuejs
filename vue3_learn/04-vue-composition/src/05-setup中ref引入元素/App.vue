<template>
  <div class="app">
    <!-- 1.获取组件实例 -->
    <h2 ref="titleRef">h2标题</h2>
    <button ref="buttonRef">button标题</button>

    <ShowInfo ref="showInfoRef"></ShowInfo>
    <button @click="getElement">获取元素</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import ShowInfo from "./ShowInfo"

export default {
  components: {
    ShowInfo
  },
  setup() {
    const titleRef = ref()
    const buttonRef = ref()
    const showInfoRef = ref()

    onMounted(() => {
      console.log(titleRef.value)
      console.log(buttonRef.value)
      console.log(showInfoRef.value)

      showInfoRef.value.showInfoFoo()
    })

    function getElement() {
      console.log(titleRef.value)
    }

    return {
      titleRef,
      buttonRef,
      showInfoRef,
      getElement
    }
  }
}
</script>

<style scoped>

</style>