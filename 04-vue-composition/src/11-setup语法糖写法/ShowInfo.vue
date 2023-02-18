<template>
  <div class="show-info">
    <h2>name: {{ name }} - age: {{ age }}</h2>
    <button @click="changeAge">修改age属性</button>
  </div>
</template>

<script setup>
  defineProps({
    name: {
      type: String,
      default: "vue.js"
    },
    age: {
      type: Number,
      default: 17
    }
  })

  const emits = defineEmits(["changeAgeEvent"])
  function changeAge() {
    emits("changeAgeEvent", 39)
  }

  // 定义foo函数，
  function foo() {
    console.log("showInfo foo")
  }
  // 通过defineExpose编译器宏显示指定组件中药暴露出去的property
  defineExpose({
    foo
  })

</script>

<style scoped>

</style>