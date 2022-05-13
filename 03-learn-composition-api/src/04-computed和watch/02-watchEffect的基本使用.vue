<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      const name = ref("xionglp")
      const age = ref(18)

      const changeName = () => name.value = "coderwhy"
      const changeAge = () => age.value++

      // 默认watchEffect函数会立即执行一次，当收集的依赖发生变化时，会再次执行
      watchEffect(() => {
        console.log("name:", name.value, "age: ", age.value)
      })

      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
    
  }
</script>

<style scoped>

</style>