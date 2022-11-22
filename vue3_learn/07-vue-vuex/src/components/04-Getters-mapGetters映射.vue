<template>
  <div class="home">
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <h2>totalAge: {{ totalAge }}</h2>
    <h2>message: {{ message }}</h2>

    <button @click="changeLevel">修改level</button>

    <!-- 根据friends的id获取对应的用户信息 -->
    <h2>id-111的friend: {{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-112的friend: {{ $store.getters.getFriendById(112) }}</h2>

  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  export default {
    computed: {
      ...mapGetters(["doubleCounter", "totalAge"])
    }
  }
</script>

<script setup>
  import { computed, toRefs } from "vue";
  import { mapGetters, useStore } from "vuex"

  const store = useStore()

  // 1.使用mapGetters
  // messageFn 别名
  // const { message: messageFn } = mapGetters(["message"])
  // const message = computed(messageFn.bind({$store: store}))

  // 2.解构的方式
  const message = computed(() => {
    return store.getters.message
  })

  function changeLevel() {
    store.commit("levelIncrement")
  }


</script>

<style scoped>

</style>