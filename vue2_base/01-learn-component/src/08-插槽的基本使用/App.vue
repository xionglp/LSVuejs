<template>
  <div>
    <my-slot-cpn>
      <div>hello world</div>
      <button>插槽按钮</button>
      <my-button></my-button>
    </my-slot-cpn>

    <div>------------------------------</div>

    <my-slot-cpn></my-slot-cpn>
  </div>
</template>

<script>

  import MySlotCpn from "./MySlotCpn.vue";
  import MyButton from "./MyButton.vue";

  export default {
    components: {
      MySlotCpn,
      MyButton
    }
  }
</script>

<style scoped>

</style>