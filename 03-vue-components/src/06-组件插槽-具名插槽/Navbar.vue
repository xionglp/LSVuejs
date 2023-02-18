<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        <div>左边标题</div>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
       <div>中间标题</div>
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <div>右边标题</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left {
    width: 80px;
    background-color: orange;
  }

  .center {
    flex: 1;
    background-color: skyblue;
  }

  .right {
    width: 80px;
    background-color: aqua;
  }
</style>