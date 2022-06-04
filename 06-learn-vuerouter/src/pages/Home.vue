<template>
  <div>
    <h2>Home page</h2>
    <ul>
      <li>Home111</li>
      <li>Home222</li>
      <li>Home333</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/product">产品</router-link>
    <router-link to="/home/moment">动态</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>