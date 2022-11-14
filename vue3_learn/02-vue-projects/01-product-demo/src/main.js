import { createApp } from 'vue'
import App from './App.vue'
// import productItem from "./components/productItem.vue"

const app = createApp(App)

// 注册全局组件
// app.component("product-item", productItem)

app.mount('#app')
