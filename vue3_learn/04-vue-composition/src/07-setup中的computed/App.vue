<template>
  <div class="age">
    <h2>fullName: {{ fullName }}</h2>
    <button @click="setFullName">设置fullName</button>

    <h2>socreLevel: {{ scoreLevel }}</h2>
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue"

export default {
  setup() {
    const names = reactive({
      firstName: "kobe",
      lastName: "bryant"
    })

    // const fullName = computed(() => {
    //   return names.firstName + " " + names.lastName
    // })

    // computed完整写法
    const fullName = computed({
      set(newValue) {
        const tempNames = newValue.split(" ")
        names.firstName = tempNames[0]
        names.lastName = tempNames[1]
      },
      get() {
        return names.firstName + " " + names.lastName
      }
    })

    function setFullName() {
      fullName.value = "coder why"
      console.log(names)
    }

    // 定义score
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value > 60 ? "及格" : "不及格"
    })

    return {
      names,
      fullName,
      setFullName,
      scoreLevel
    }
  }
}
</script>

<style scoped>

</style>