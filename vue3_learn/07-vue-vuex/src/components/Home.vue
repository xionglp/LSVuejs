<template>
  <div class="home">
    
    <h2>store Name: {{ $store.state.name }}</h2>
    <h2>store Level: {{ $store.state.level }}</h2>

    <button @click="changeName('kobe')">修改name</button>
    <button @click="incrementLevel()">递增level</button>
    <button @click="changeInfo({name: 'rose', level: 123})">修改info</button>
  </div>
</template>

<script>
  import { mapMutations } from "vuex"
  export default {
    methods: {
      btnClick() {
        console.log("btnClick")
      },
      // ...mapMutations(["changeName", "incrementLevel", "changeInfo"])
    }
  }
</script>

<script setup>
  import { mapMutations, useStore } from "vuex"
  
  const store = useStore()

  const mutations = mapMutations(["changeName", "incrementLevel", "changeInfo"])
  const newMutations = {}
  Object.keys(mutations).forEach(key => {
    newMutations[key] = mutations[key].bind({$store: store})
  })

  const { changeName, incrementLevel, changeInfo } = newMutations


</script>

<style scoped>

</style>