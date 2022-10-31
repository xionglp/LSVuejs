<template>
  <div>
    <h2 ref="title">Hello World</h2>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      
      const title = ref(null)

      watchEffect(() => {
        console.log(title.value)
      },{
        flush: "post" // 调整watchEffect执行时机
      })
      

      return {
        title
      }
    }
    
  }
</script>

<style scoped>

</style>