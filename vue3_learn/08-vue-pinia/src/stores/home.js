import { defineStore } from "pinia"

const useHome = defineStore("home", {
  state: function() {
    return {
      banners: [],
      recommends: []
    }
  },
  getters: {

  },
  actions: {
    fetchHomeMultidata(payload) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata")
        const data = await res.json()
        console.log(data)
        resolve("传出去的数据")
        this.banners = data.data.banner.list
        this.recommends = data.data.recommend.list
      })
    }
  }
})

export default useHome