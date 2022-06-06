<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>Home: {{ $store.state.name }}</h2>
    <!-- <h2>Home Age: {{ age }}</h2> -->
    <h2>Home Height: {{ customHeight }}</h2>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      fullName() {
        return "Kobe Bryant"
      },
      // 其他的计算属性，从state获取
      // ...mapState(["counter", "age", "name", "height"])
      ...mapState({
        customName: state => state.name,
        customHeight: state => state.height,
      })
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>