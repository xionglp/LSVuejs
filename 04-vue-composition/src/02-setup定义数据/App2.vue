<template>
  <div class="app">
    <form action="">
      账号: <input type="text" v-model="account.username">
      密码: <input type="text" v-model="account.password">
    </form>

    <form action="">
      账号: <input type="text" v-model="username">
      密码: <input type="text" v-model="password">
    </form>

    <show-info :name="name" :age="age"></show-info>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue"
import ShowInfo  from "./ShowInfo"

export default {
  components: {
    ShowInfo
  },
  setup() {
    // 定义响应式数据reactive、ref都可以
    // ref也可以定义复杂的数据
    const info = ref({
      name: "xionglp",
      age: 17,
      height: 1.88
    })

    // reactive应用场景: 
    // 1.条件一: 多用于本地数据
    // 2.条件而: 多个数据之间有关联性(聚合的数据)
    const account = reactive({
      username: "kobe",
      password: "123456"
    })

    // ref应用场景: 其他场景基本用ref
    // 1.定义本地一些简单数据
    const username = ref("coderwhy")
    const password = ref("123456")
    const name = ref("xionglp")
    const age = ref(18)

    // 2.网络请求返回的数据
    const musics = ref([])
    onMounted(() => {
      const serverMusics = ["海阔天空", "青花瓷", "春天"]
      musics.value = serverMusics
    })

    return {
      info,
      account,
      username,
      password,
      name,
      age
    }
  }
}
</script>

<style scoped>

</style>