<template>
  <div class="home">
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>totalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>

    <!-- 根据friends的id获取对应的用户信息 -->
    <h2>id-111的friend: {{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-112的friend: {{ $store.getters.getFriendById(112) }}</h2>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<script setup>


</script>

<style scoped>

</style>