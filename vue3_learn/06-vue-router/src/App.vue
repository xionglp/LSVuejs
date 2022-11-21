<template>
  <div class="app">
    <h2>vue-router</h2>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>

      <router-link to="/user/123">用户123</router-link>
      <router-link to="/user/456">用户456</router-link>

      <!-- 其他元素跳转路由 -->
      <span style="cursor: pointer;" @click="homeSpanClick">去首页</span>
      <button @click="aboutButtonClick">去关于</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
   
  const router = useRouter()

  function homeSpanClick() {
    router.push({
      path: "/home"
    })
  }

  function aboutButtonClick() {
    router.push({
      path: "/about",
      query: {
        name: "xionglp",
        age: 15
      }
    })
  }

</script>

<style>

</style>
