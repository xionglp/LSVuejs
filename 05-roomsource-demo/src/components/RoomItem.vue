<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title" :style="{ color: titleInfo.color }">{{ titleInfo.text }}</div>
        <div class="name">{{ itemData.name }}</div>
        <div class="price">{{ itemData.price_format }}</div>
        <div class="bottom_info" :style="bottomInfo.style">{{ bottomInfo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue"

  const props = defineProps({
    itemData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  })

  // 将关联性较强的多个计算属性放在一起，形成一个整体
  const titleInfo = computed(() => {
    return {
      text: props.itemData.verify_info.messages.join(" "),
      color: props.itemData.verify_info.text_color
    }
  })

  const bottomInfo = computed(() => {
    return {
      content: props.itemData.bottom_info.content,
      style: {
        color: props.itemData.bottom_info.content_color,
        fontSize: props.itemData.bottom_info.font_size
      }
    }
  })
</script>

<style lang="less" scoped>
.room-item {
  width: 33.333333%;

  .item-inner {
    margin: 0 8px 12px;
    font-weight: 800;
    color: #484848;

    .cover img {
      width: 100%;
      border-radius: 3px;
    }

    .info {
      .title {
        margin-top: 8px;
        font-size: 12px;
      }

      .name {
        margin-top: 3px;
        font-size: 16px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        margin: 3px 0;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>