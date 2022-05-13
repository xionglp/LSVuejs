<template>
  <div>
    <h2>{{fullName}}</h2>
    <button @click="changeName">改变name</button>
  </div>
</template>

<script>
  import { ref, computed } from 'vue';

  export default {
    setup() {
      const firstName = ref('kobe')
      const lastName = ref('Bryant')

      // 传入一个get函数
      // const fullName = computed(() => {
      //   return firstName.value + " " + lastName.value
      // })

      // 传入一个对象，里面包含get和set函数
      const fullName = computed({
        get() {
          return firstName.value + " " + lastName.value
        },
        set(newValue) {
          const names = newValue.split(" ")
          firstName.value = names[0]
          lastName.value = names[1]
        }
      })

      const changeName = () => {
        fullName.value = "coder why"
      }

      return {
        fullName,
        changeName
      }
    }
    
  }
</script>

<style scoped>

</style>