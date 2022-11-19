<template>
  <div class="show-info">
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 子组件最好不要修改父组件传递过来的对象数据， 违背单向数据流的规范 -->
    <button @click="showInfoBtnClick">showInfo按钮</button>

    <h2>readonlyInfo: {{ readonlyInfo }}</h2>
    <button @click="readonlyShowBtnClick">修改readonlyInfo按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    readonlyInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  emits: ["changeInfoName", "changeReadonlyInfoName"],
  setup(props, context) {
    function showInfoBtnClick() {
      context.emit("changeInfoName", "kobe")
    }
    function readonlyShowBtnClick() {
      context.emit("changeReadonlyInfoName", "james")
    }

    return {
      showInfoBtnClick,
      readonlyShowBtnClick
    }
  }
}
</script>

<style scoped>

</style>