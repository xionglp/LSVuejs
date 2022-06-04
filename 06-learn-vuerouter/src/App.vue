<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/xionglp/10000">用户</router-link>
    <router-link to="/category">分类</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>
    
    <router-view></router-view>
  </div>
</template>

<script>

import { useRouter } from "vue-router";

export default {
  name: 'App',
  components: {
  },
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about");
    // }
  },
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      router.push({
        path: "/about",
        query: {
          name: "xionglp",
          age: 18
        }
      })
    };

    const forwardOneStep = () => {
      router.go(1); // 前进一步
      // router.go(-1); // 后退一步
      // router.forward(); // 前进一步
      // router.back(); // 后退一步
    }

    return {
      jumpToAbout,
      forwardOneStep
    }
  }
}
</script>

<style>
</style>
