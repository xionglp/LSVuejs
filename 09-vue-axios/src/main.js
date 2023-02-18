import { createApp } from 'vue'
import App from './App.vue'
import lsRequest from "./service"

createApp(App).mount('#app')

lsRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res: ", res)
})






