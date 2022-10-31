<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue';

  export default {
    setup() {
      
      const info = reactive({name: "xionglp", age: 18})

      // 1、侦听watch时传入一个get函数
      // watch(() => info.name, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue", oldValue)
      // })

      // 2、 传入一个可响应式对象
      // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
      // watch(info, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue", oldValue)
      // })
      
      // 情况二: ref对象获取newValue和oldValue是value值的本身
      const name = ref("why")
      watch(name, (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue", oldValue)
      })

      const changeData = () => {
        info.name = "kobe"
      }
      

      return {
        info,
        changeData
      }
    }
    
  }
</script>

<style scoped>

</style>