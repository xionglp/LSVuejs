// 给axios实例配置公共的基础配置
const baseURL = "http://123.207.32.32:8000"

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 100000
axios.defaults.headers = {}

axios.get("/home/multidata").then(res => {
  console.log("home: ", res.data.data)
})

// 同时发送多个请求
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123.207.32.32:9001/lyric?id=500665346")
]).then(res => {
  console.log("res: ", res)
})