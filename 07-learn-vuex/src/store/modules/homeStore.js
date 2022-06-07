const homeStoreModule = {
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
    
  }
}

export default homeStoreModule