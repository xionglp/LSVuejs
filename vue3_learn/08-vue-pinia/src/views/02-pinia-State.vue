<template>
  <div class="home">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>

    <button @click="changeState">修改state</button>
    <button @click="resetState">重置reset</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from "pinia"
  import useUser from "@/stores/user"

  const userStore = useUser()
  const { name, age, level } = storeToRefs(userStore)

  function changeState() {
    // 1.一个一个修改属性
    // userStore.name = "james"
    // userStore.age = 42
    // useUser.level = 89

    // 2.一次性修改多个属性
    // userStore.$patch({
    //   name: "james",
    //   age: 38,
    // })

    // 3.替换state为新的对象
    const oldState = userStore.$state
    userStore.$state = {
      name: "curry",
      level: 200
    }
    console.log(oldState === userStore.$state)

  }

  function resetState() {
    userStore.$reset()
  }

</script>

<style lang="less" scoped>

</style>