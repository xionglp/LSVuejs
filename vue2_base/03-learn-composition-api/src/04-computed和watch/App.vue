<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  // 深度监听

  import { reactive, watch } from 'vue';

  export default {
    setup() {
      
      // const names = reactive(["aaa", "bbb", "ccc"])

      // 1.定义可响应式的对象
      const info = reactive({
        name: "why", 
        age: 18,
        friend: {
          name: "kobe"
        }
      });

      watch(() => ({...info}), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        deep: true, // 深度监听
        immediate: true, // 立即执行
      })

      const changeData = () => {
        // names.push("xionglp")
        info.friend.name = "james"
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