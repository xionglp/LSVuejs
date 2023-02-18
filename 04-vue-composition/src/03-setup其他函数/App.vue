<template>
  <div class="app">
    <h2>info: {{ info }}</h2>
    <show-info 
              :info="info" 
              :readonlyInfo="readonlyInfo" 
              @changeInfoName="changeInfoName"
              @changeReadonlyInfoName="changeReadonlyInfoName">
    </show-info>
  </div>
</template>

<script>
import { reactive, readonly } from "vue"
import ShowInfo  from "./ShowInfo"

export default {
  components: {
    ShowInfo
  },
  setup() {
    // 本地定义多个数据都需要传递给ShowInfo组件
    const info = reactive({
      name: "xionglp",
      age: 18,
      height: 1.88
    })

    function changeInfoName(payload) {
      info.name = payload
      // console.log(toRaw(info))
    }

    // 使用readonly包裹info
    const readonlyInfo = readonly(info)
    function changeReadonlyInfoName(payload) {
      readonlyInfo.name = payload
      // info.name = payload
    }

    return {
      info,
      changeInfoName,
      readonlyInfo,
      changeReadonlyInfoName
    }
  }
}
</script>

<style scoped>

</style>