<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <h2>name: {{ $store.state.name }}</h2>

    <button @click="incrementCounterAction()">发起action修改counter</button>
    <button @click="increment">递增</button>
    <button @click="changeNameAction('rose')">发起action修改name</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // counterBtnClick() {
      //   this.$store.dispatch("incrementCounterAction")
      // },
      // nameBtnClick() {
      //   this.$store.dispatch("changeNameAction", "kobe bryant")
      // },

      // ...mapActions(["incrementCounterAction", "changeNameAction"])
    }
  }
</script>

<script setup>
  import { useStore, mapActions } from 'vuex';

  // 在setup函数中使用mapActions辅助函数
  const store = useStore()
  const actions = mapActions(["incrementCounterAction", "changeNameAction"])
  const newActions = {}
  Object.keys(actions).forEach(key => {
    newActions[key] = actions[key].bind({ $store: store })
  })
  const { incrementCounterAction, changeNameAction } = newActions

  // 默认派发dispatch
  function increment() {
    store.dispatch("incrementCounterAction")
  }


</script>

<style scoped>
</style>