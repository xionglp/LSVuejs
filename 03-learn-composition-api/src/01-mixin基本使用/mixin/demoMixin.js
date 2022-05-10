export const demoMixin = {
  data() {
    return {
      message: "demoMixin"
    }
  },

  methods: {
    foo() {
      console.log("mixin 按钮点击事件")
    }
  },

  created() {
    console.log("mixin demo created")
  }

}