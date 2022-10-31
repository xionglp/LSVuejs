<template>
  <div>
    <!-- <show-message title="show" content="message"></show-message> -->
    <show-message id="abc" class="xlp" title="title" :content="content" :counter="counter" :messageInfo="info"></show-message>
    <muti-root id="aaa"></muti-root>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';
  import MutiRoot from './MutiRoot.vue';

  export default {
    components: {
      ShowMessage,
      MutiRoot
    },
    data() {
      return {
        counter: 2,
        content: "111",
        info: {
          id: 1234
        }
      }
    }
  }
</script>

<style scoped>

</style>