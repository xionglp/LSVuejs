<template>
  <div class="home">
    <h2>Home当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <div class="btns">
      <button @click="popularClick">首页-流行</button>
      <button @click="hotClick">首页-热门</button>
      <button @click="songClick">首页-歌单</button>
    </div>
  </div>
</template>

<script>
import useCounter from "../hooks/useCounter.js"
import useTitle from "../hooks/useTitle.js";

export default {
  setup() {
    // 计数器功能
    const { counter, increment, decrement } = useCounter()
    const { title } = useTitle("首页")

    // 动态设置title
    function popularClick() {
      title.value = "首页-流行"
    }
    function hotClick() {
      title.value = "首页-热门"
    }
    function songClick() {
      title.value = "首页-歌单"
    }

    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick
    }
  }
}
</script>

<style scoped>

</style>