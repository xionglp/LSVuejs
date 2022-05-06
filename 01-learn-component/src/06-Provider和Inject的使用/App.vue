<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from "./Home.vue"
  import { computed } from 'vue'

  export default {
    components: {
      Home,
    },
    data() {
      return {
        names: ["aaa", "bbb"]
      }
    },
    provide() {
      return {
        name: "xionglp",
        age: 18,
        length: computed(() => this.names.length) 
      }
    },
    methods: {
      addName() {
        this.names.push("ccc")
        console.log(this.names)
      }
    }
    
  }
</script>

<style scoped>

</style>