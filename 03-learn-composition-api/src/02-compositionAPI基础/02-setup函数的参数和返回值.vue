<template>
  <div>
    Home page
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },

    //props: 父组件传递过来的属性
    // context: { attrs, slots, emit }
    // attrs: 所有的非prop的attribute
    // slots: 父组件传递过来的插槽
    // emit: 组件内部需要发出的事件用到emit（因为不能访问this， 所有不能用this.$emit()）
    setup(props, context) {
      console.log(props.message)
      console.log(context.attrs.class)
      console.log(context.emit)

      let counter = 100;

      // 局部函数
      const increment = () => {
        // counter++;
        console.log(counter++)
      }

      return {
        title: "hello home setup",
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>