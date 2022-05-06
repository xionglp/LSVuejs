<template>
  <div>
    <h2 v-bind="$attrs">{{title}}</h2>
    <span :class="$attrs.class">{{content}}</span>
    <h2>{{counter}}</h2>
    <h2>{{messageInfo.id}}</h2>
  </div>
</template>

<script>
  export default {
    // props: ["title", "content"],
    inheritAttrs: false, // 禁用组件根元素继承非Prop的Attribute属性
    props: {
      title: String,
      content: {
        type: String,
        default: "defalut value"
      },
      counter: {
        type: Number,
        required: true
      },
      info: {
        type: Object,
        default() {
          return {
            name: "vue.js object"
          }
        }
      },
      messageInfo: {
        type: Object,
        default() {
          return {
            id: 0
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>