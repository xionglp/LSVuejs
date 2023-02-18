<template>
  <div class="home">
    <h2>counter: {{ counterStore.count }}</h2>

    <ul>
      <template v-for="item in homeStore.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter'
  import useHome from "@/stores/home"

  const counterStore = useCounter()
  const homeStore = useHome()

  homeStore.fetchHomeMultidata(1234).then(res => {
    console.log("fetchHomeMultidata的action已经完成了:", res)
  })

</script>

<style lang="less" scoped>
</style>