// axios默认库提供给我们的实例对象
axios.get("http://123.207.32.32:9001/lyric?id=500665346")

// 创建其他实例发送网络请求
// 可以创建多个实例发送网络请求
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout: 10000,
  headers: {}
})

instance1.get("/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("instance1: ", res.data)
})

const instance2 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 50000,
  headers: {}
})

instance2.get("/home/multidata").then(res => {
  console.log("instance2: ", res.data)
})