<template>
  <div>
    <hr>
      <h2>总价: {{$store.getters.totalPrice}}</h2>
      <h2>总价: {{$store.getters.totalPriceCountGreaterN(1)}}</h2>
      <h2>{{ $store.getters.nameInfo }}</h2>
      <h2>{{ nameInfo }}</h2>
      <h2>{{ ageInfo }}</h2>
      <h2>{{ heightInfo }}</h2>
    <hr>
  </div>
</template>

<script>
  import { useGetters } from "../hooks/useGetters";

  export default {
    computed: {
      // nameInfo() {
      //   return this.$store.getters.nameInfo;
      // }
    },
    setup() {
      // const store = useStore();
      const storeGetters  = useGetters(["nameInfo", "ageInfo", "heightInfo"]);

      return {
        ...storeGetters
      }
    }

  }
</script>

<style scoped>

</style>