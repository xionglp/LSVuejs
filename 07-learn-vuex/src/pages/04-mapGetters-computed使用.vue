<template>
  <div>
    <hr>
      <h2>总价: {{$store.getters.totalPrice}}</h2>
      <h2>总价: {{$store.getters.totalPriceCountGreaterN(1)}}</h2>
      <h2>{{ $store.getters.nameInfo }}</h2>
      <h2>{{ nameInfo }}</h2>
      <h2>{{ ageInfo }}</h2>
      <h2>{{ heightInfo }}</h2>
      <h2>{{ sNameInfo }}</h2>
    <hr>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    computed: {
      ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
      ...mapGetters({
        sNameInfo: "nameInfo"
      })
    },

  }
</script>

<style scoped>

</style>