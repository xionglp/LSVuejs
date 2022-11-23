export default {
  state: function() {
    return {
      // 网络请求数据
      banners: [],
      recommends: []
    }
  },
  getters: {

  },
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    // fetch 拿、获取
    fetchHomemultiDataAction(context) {
      return new Promise( async(resolve, reject) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata");
        const data = await res.json()
        console.log(data)
        context.commit("changeBanners", data.data.banner.list)
        context.commit("changeRecommends", data.data.recommend.list)

        resolve("action传递出去的数据~")
      })
    }
  }
}
