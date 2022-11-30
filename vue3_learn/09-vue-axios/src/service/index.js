import axios from "axios"

class LSRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.instance.request({ ...config, method: "get" })
  }

  post(config) {
    return this.instance.request({ ...config, method: "post" })
  }
}

export default new LSRequest("http://123.207.32.32:9001")