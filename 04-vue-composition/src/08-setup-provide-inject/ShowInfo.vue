<template>
  <div class="show-info">
    <h2>{{ name }} - {{ age }} - {{ height }}</h2>
  </div>  
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const name = inject("name")
    const age = inject("age")
    const height = inject("height")

    return {
      name,
      age,
      height
    }
  }
}
</script>

<style scoped>

</style>