<template>
  <div>
    <show-names :names="names">
      <template v-slot:default="slotProps">
        <button>{{slotProps.item}} - {{slotProps.index}}</button>
      </template>
    </show-names>
  </div>
</template>

<script>

  import ShowNames from "./ShowNames.vue"

  export default {
    components: {
      ShowNames
    },
    data() {
      return {
        names: ["xionglp", "kobe", "james", "coderwhy"]
      }
    }
  }
</script>

<style scoped>

</style>