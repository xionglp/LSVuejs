<template>
  <div class="home">
    <!-- 1.在模板中直接使用多个状态 -->
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>

    <!-- 2.options api 计算属性: 数组写法 -->
    <!-- <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2> -->

    <!-- 对象的写法 -->
    <!-- <h2>name: {{ sName }}</h2>
    <h2>level: {{ sLevel }}</h2> -->

    <!-- 4. composition api setup -->
    <!-- <h2>name: {{ cName }}</h2>
    <h2>level: {{ cLevel }}</h2> -->

    <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2>

    <button @click="incrementLevel">level+1</button>

  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    computed: {
      fullName() {

      },
      // mapState() 返回的是一个个的函数（函数里面return this.$store.state.name），利用展开语法
      // 缺点: name、level有可能和data选项里面定义的属性重名
      ...mapState(["name", "level"]),

      // 对象的写法
      ...mapState({
        sName: state => state.name,
        sLevel: state => state.level
      })
    }
  }
</script>

<script setup>
  import { toRefs, computed } from "vue"
  import { useStore, mapState } from "vuex"
  import useState from "../hooks/useState"

  // 1.解构的对象里面是一个一个函数
  // const { name, level } = mapState(["name", "level"])
  // const store = useStore()
  // const cName = computed(name.bind({$store: store}))
  // const cLevel = computed(level.bind({$store: store}))

  // 2.自定义封装useState
  // const { name, level } = useState(["name", "level"])

  // 3.对store.state进行解构
  const store = useStore()
  const { name, level } = toRefs(store.state)

  function incrementLevel() {
    store.commit("levelIncrement", 20)
  }

</script>

<style scoped>

</style>