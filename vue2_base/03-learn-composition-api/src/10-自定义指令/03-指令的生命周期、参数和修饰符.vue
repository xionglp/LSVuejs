<template>
  <div>
    <button v-why.aaa="'xionglp'" @click="increment">当前计数：{{counter}}</button>
  </div>
</template>

<script>
  import { ref } from "vue"

  export default {
    // 局部指令
    directives: {
      why: {
        created(el, bindings) {
          console.log("created", el, bindings)
          console.log(bindings.value) // 参数
          console.log(bindings.modifiers) // 修饰符
        },
        beforeMount() {
          console.log("why beforeMounted")
        },
        mounted() {
          console.log("why mounted")
        },
        beforeUpdate() {
          console.log("why beforeUpdate")
        },
        updated() {
          console.log("why updated")
        },
        beforeUnmount() {
          console.log("why beforeUnmount")
        },
        unmounted() {
          console.log("why unmounted")
        }
      }
    },

    setup() {
      const counter = ref(0)
      const increment = () => {
        counter.value ++
      }

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>