<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <h2>2倍当前计数：{{doubleCounter}}</h2>
    <button @click="increment">计数+1</button>
    <button @click="decrement">计数-1</button>

    <h2>{{data}}</h2>
    <button @click="changeData">修改数据</button>


  </div>
</template>

<script>
  import { useCounter, useTitle, useLocalStorage } from "./hooks/index.js"
  export default {
    setup() {

      const { counter, doubleCounter, increment, decrement } = useCounter()
      const titleRef = useTitle("coderwhy")
      setTimeout(() => {
        titleRef.value = "xionglp"
      }, 3000);

      // const info = {
      //   name: "xionglp",
      //   age: 18
      // }

      const data = useLocalStorage("info")
      const changeData = () => {
        console.log(data.value.name)
        data.value = {name: "kobe", age: 99}
      }

      return {
        counter,
        doubleCounter,
        increment,
        decrement,
        titleRef,
        data,
        changeData
      }
    }
  }
</script>

<style scoped>

</style>