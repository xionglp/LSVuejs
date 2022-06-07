import { createStore } from "vuex";
import homeStoreModule from "./modules/homeStore";
import userStoreModule from "./modules/userStore";

const store = createStore({
  state() {
    return {
      rootCounter: 22
    }
  },
  getters: {
    doubleRootCounter(state) {
      return state.rootCounter * 2
    },
  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    }
  },
  actions: {
  },
  modules: {
    homeStore: homeStoreModule,
    userStore: userStoreModule 
  }
});

export default store;