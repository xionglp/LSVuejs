<script>
  import { h } from "vue"

  export default {
    render() {
      return h("div", null, [
        h("h2", null, "hello world"),
        this.$slots.default ? this.$slots.default({name: "xionglp"}) : h("span", null, "HelloWorld的插槽默认值")
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>