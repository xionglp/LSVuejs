<template>
  <div class="tab-control">
    <div 
      class="tab-control-item"
      v-for="(item, index) in tabNames" 
      :key="item" 
      :class="{active: currentIndex === index}" 
      @click="clickTabs(index)"
    >
      <!-- 将item数据传到App.vue -->
      <slot :item="item">
        <span>{{ item }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabNames: {
      type: Array,
      default() {
        return []
      }
    }
  },
  emits: ["tabClick"],
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickTabs(index) {
      this.currentIndex = index
      this.$emit("tabClick", index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .tab-control .tab-control-item {
    flex: 1;
  }

  .tab-control .tab-control-item.active {
    color: red;
  }

  .tab-control .tab-control-item.active span {
    padding: 8px;
    border-bottom: 2px solid red;
  }
</style>