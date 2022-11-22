<template>
  <div class="login">
    <button @click="gotoLogin">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router"
  
  const router = useRouter()

  function gotoLogin() {
    // 向服务器发送登录请求， 请求成功返回登录token
    localStorage.setItem("token", "xiongp_token")
    router.push({
      path: "/order"
    })
  }
</script>

<style scoped>

</style>