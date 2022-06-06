<template>
  <div>
    <h2>counter: {{ $store.state.counter }}</h2>
    <h2>name: {{ age }}</h2>
    <h2>counter2: {{ sCounter }}</h2>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>
    <br>

  </div>
</template>

<script>
  import { mapState, useStore } from "vuex";
  import { computed } from "vue";

  export default {
    setup() {
      const store = useStore();
      const sCounter = computed(() => {
        return store.state.counter;
      });

      const storeStateFns = mapState(["counter", "name", "age"]);

      const storeState = {};
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store});
        storeState[fnKey] = computed(fn);
      })

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