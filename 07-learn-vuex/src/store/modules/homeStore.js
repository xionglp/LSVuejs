const homeStoreModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2;
    },
    otherGetters(state) {
      return state.homeCounter + 123;
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    }
  },
  actions: {
    incrementAction(context) {
      context.commit("increment");
      context.commit("increment", null, {root: true})
    }
  }
}

export default homeStoreModule