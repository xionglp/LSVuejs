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

      // 默认watchEffect函数会立即执行一次，当收集的依赖发生变化时，会再次执行
      const stopWatch = watchEffect((onInvalidate) => {
        const timer = setTimeout(() => {
          console.log("网络请求成功")
        }, 2000);

        onInvalidate(() => {
          clearTimeout(timer)
        })
        console.log("name:", name.value, "age: ", age.value)
      })

      const changeName = () => name.value = "coderwhy"
      const changeAge = () => {
        age.value++
        if (age.value > 30) {
          stopWatch() // 停止侦听
        }
      }

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