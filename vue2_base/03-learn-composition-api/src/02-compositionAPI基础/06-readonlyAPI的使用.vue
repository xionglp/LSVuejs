<template>
  <div>
    Home page
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
  import { readonly } from "vue"
  // import { ref } from "vue"
  // import { reactive } from "vue"

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    setup() {
      // 1.普通对象
      const info = {
        name: "xionglp"
      }
      const readonlyInfo1 = readonly(info)

      // // 2.reactive对象
      // const reactiveInfo = reactive({
      //   name: "xionglp"
      // })
      // const readonlyInfo2 = readonly(reactiveInfo)

      // // 3.ref对象
      // const refInfo = ref("why")
      // const readonlyInfo3 = readonly(refInfo)

      // 局部函数
      const updateState = () => {
        readonlyInfo1.name = "corderwhy"
      }

      return {
        updateState
      }
    }
  }
</script>

<style scoped>

</style>