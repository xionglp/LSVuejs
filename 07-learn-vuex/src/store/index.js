import { createStore } from "vuex";
import axios from "axios";
import { INCREMENT_N } from "./mutation-types";

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "xionglp",
      age: 18,
      height: 1.88,
      books: [
        {name: "深入vue.js", price: 200, count: 3},
        {name: "深入理解数据结构和算法", price: 130, count: 1},
        {name: "大话Http", price: 240, count: 5},
        {name: "webpack工程", price: 110, count: 2},
      ],
      discount: 0.8,
      banners: []
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.price * book.count;
      }
      return (totalPrice * getters.currentDiscount).toFixed(2);
    },
    currentDiscount(state) {
      return state.discount * 0.9;
    },
    totalPriceCountGreaterN(state, getters) {
      return function(n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price;
          }
        }
        return (totalPrice * getters.currentDiscount).toFixed(2);
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    },
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    [INCREMENT_N](state, payload) {
      console.log(payload);
      state.counter = state.counter + payload.n;
    },
    addBannerData(state, payload) {
      state.banners = payload
    }
  },
  actions: {
    //放函数
    incrementAction(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    decrementAction(context, payload) {
      console.log(payload);
      context.commit("decrement")
    },
    getHomeMultiData(context) {
      axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        console.log(res.data.data.banner.list);
        context.commit("addBannerData", res.data.data.banner.list);
      })
    }
  }
});

export default store;