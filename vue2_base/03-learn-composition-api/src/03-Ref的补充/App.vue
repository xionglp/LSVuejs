<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script>
  import { reactive, toRef } from "vue";
  export default {
    setup() {
      const info = reactive({name: "xionglp", age: 18})

      // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
      // let { name, age } = toRefs(info)

      let { name } = info
      let age = toRef(info, 'age')

      const changeAge = () => {
        age.value++
        // name.value = "kobe"
      }

      return {
        changeAge,
        age,
        name
      }

    }
  }
</script>

<style scoped>

</style>