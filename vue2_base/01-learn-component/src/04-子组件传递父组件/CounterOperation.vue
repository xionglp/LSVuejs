<template>
  <div>
    <button @click="addOne">+1</button>
    <button @click="subOne">-1</button>

    <input type="text" v-model.number="num" />
    <button @click="addN">+n</button>
  </div>
</template>

<script>
  export default {
    // emits: ['add', 'sub', 'addN'],
    // emits 对象的写法, 目的是可以对参数进行校验
    emits: {
      add: null,
      sub: null,
      addN: (num) => {
        console.log(num)
        return true
      },
    },
    data() {
      return {
        num: 10
      }
    },
    methods: {
      addOne() {
        this.$emit('add')
      },
      subOne() {
        this.$emit('sub')
      },
      addN() {
        this.$emit('addN', this.num)
      }
    }
  }
</script>

<style scoped>

</style>