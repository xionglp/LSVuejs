// axios对实例配置拦截器
// request请求拦截
axios.interceptors.request.use((confirm) => {
  console.log("请求成功拦截")

  // 1.开始loading动画
  // 2.对原来的配置进行修改
  // 2.1 header
  // 2.2 认证登录 token
  // 2.3 对参数进行转化
  return confirm
}, (err) => {
  return err
})

axios.interceptors.response.use((res) => {
  console.log("相应成功拦截")
  // 结束loading动画
  // 对数据进行转化，返回数据
  return res.data

}, (err) => {
  console.log("相应失败的拦截")
  return err
})

axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})