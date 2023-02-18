import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"

// createApp(App).mount('#app')

const app = createApp(App)
app.use(store)
app.mount("#app")
