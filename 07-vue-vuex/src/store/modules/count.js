const count = {
  namespaced: true,
  state: () => ({
    count: 88,

  }),
  getters: {
    doubleCount(state, getters, rootState) {
     return state.count +  rootState.counter
    }
  },
  mutations: {
    incrementCount(state) {
      state.count++
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit("incrementCount")
    }
  }
}

export default count