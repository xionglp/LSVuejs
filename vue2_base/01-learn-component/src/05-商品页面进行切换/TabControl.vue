<template>
  <div class="tab-control">
    <div 
      class="tab-control-item" 
      :class="{active: currentIndex === index}" 
      v-for="(item, index) in names" 
      :key="index"
      @click="clickItem(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    emits:['clickItem'],
    props: {
      names: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index;
        this.$emit('clickItem', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
  }

  .tab-control-item {
    flex: 1;
    text-align: center;
  }

  .tab-control-item.active {
    color: #f00;
  }

  .tab-control-item.active span {
    border-bottom: 2px solid #f00;
    padding: 5px;
  }

</style>