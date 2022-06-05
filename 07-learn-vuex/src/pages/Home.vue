<template>
  <div>
    <h2>counter: {{ $store.state.counter }}</h2>
    <h2>name: {{ age }}</h2>
    <h2>counter2: {{ sCounter }}</h2>
    <br>
  </div>
</template>

<script>
  import { mapState, useStore } from "vuex";
  import { computed } from "vue";

  export default {
    computed: {
      fullName() {
        return "Kobe Bryant"
      },
      // 其他的计算属性，从state获取
      ...mapState(["name", "age"]),
    },
    setup() {

      const store = useStore();
      const sCounter = computed(() => {
        return store.state.counter;
      });

      const storeState = mapState(["counter", "name", "age"]);

      return {
        sCounter,
        ...storeState
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>