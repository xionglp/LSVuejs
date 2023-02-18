// 定义相关counter的store
import { defineStore } from "pinia"
import useUser from "./user"

const useCounter = defineStore("counter", {
  state: function() {
    return {
      count: 99,
      friends: [
        { id: 110, name: "kobe" },
        { id: 111, name: "james" },
        { id: 112, name: "curry" }
      ]
    }
  },
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2
    },
    // 2.一个getter引用另一个getter
    doubleCountAddOne(state) {
      return this.doubleCount + 1
    },
    // 3.getters支持返回一个函数
    getFriendById(state) {
      return function(id) {
        return state.friends.find(item => {
          return item.id === id;
        })
      }
    },
    // 4.getters中用到别的store中的数据
    showMessage(state) {
      const userStore = useUser()
      return `name: ${userStore.name}, count: ${state.count}`
    }
  }
})

export default useCounter