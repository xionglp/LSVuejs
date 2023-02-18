import { createStore } from "vuex"

const store = createStore({
  state: () => {
    return {
      // 本地模拟数据
      counter: 99,
      name: "xionglp",
      level: 100,
      avatarUrl: "https://www.xionglp.png",
      friends: [
        { name: "kobe", age: 39, id: 110 },
        { name: "james", age: 36, id: 111 },
        { name: "curry", age: 57, id: 112 }
      ],

      // 网络请求数据
      banners: [],
      recommends: []
    }
  },
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.counter * 2
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    // 2.在该getters属性中，用到其他的getters属性
    message(state, getters) {
      return `name: ${state.name}, level: ${state.level}, totalAge: ${getters.totalAge}`
    },
    // 3.返回对应的函数, 调用这个函数可以传入对应的参数
    getFriendById(state) {
      return function(id) {
        const friend = state.friends.find((item) => {
          return item.id === id
        })
        return friend
      }
    }

  },
  mutations: {
    increment: function(state) {
      state.counter++
    },
    levelIncrement: function(state, payload) {
      console.log(payload)
      state.level++
    },
    changeName(state, payload) {
      state.name = payload
    },
    incrementLevel(state) {
      state.level++
    },
    changeInfo(state, newInfo) {
      state.name = newInfo.name
      state.level = newInfo.level
    },
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    incrementCounterAction(context) {
      context.commit("increment")
    },
    changeNameAction(context, payload) {
      context.commit("changeName", payload)
    },
    // fetch 拿、获取
    async fetchHomemultiDataAction(context) {
      // 三种写法
      // 1. 返回Promise，给Promise设置then
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   res.json().then(data => {
      //     console.log(data)
      //     context.commit("changeBanners", data.data.banner.list)
      //     context.commit("changeRecommends", data.data.recommend.list)
      //   })
      // })

      // 2. Promise 链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data)
      //   context.commit("changeBanners", data.data.banner.list)
      //   context.commit("changeRecommends", data.data.recommend.list)
      // })

      // 3. async/await 
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json()
      console.log(data)
      context.commit("changeBanners", data.data.banner.list)
      context.commit("changeRecommends", data.data.recommend.list)

    }
  }
})

export default store