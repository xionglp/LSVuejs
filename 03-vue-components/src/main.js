import { createApp } from 'vue'

import App from "./14-组件的v-model/App.vue"

const app = createApp(App)

app.mixin({
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    // console.log("app mixin")
  }
})

app.mount('#app')
