<template>
  <div class="infos">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>

    <h2>message: {{ showMessage }}</h2>

    <h2>{{ friends.name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '我是默认name',
    },
    age: {
      type: Number,
      default: 18,
    },
    height: {
      type: Number,
      default: 1.98,
    },
    // 对象类型写默认值的时候，需要编写default函数，函数返回默认值
    friends: {
      type: Object,
      default: function () {
        return {
          name: 'james',
        }
      },
    },
    hobbies: {
      type: Array,
      default() {
        return ['篮球', '足球']
      },
    },
    showMessage: {
      type: String,
      default: '默认message',
    },
  },
}
</script>

<style scoped>
</style>