import { createApp } from 'vue'
// import App from './01_自定义内置指令/App.vue'
// import App from "./02_Render渲染函数/App.vue"
import App from "./03_jsx的语法/App.vue"

import directives from  "./01_自定义内置指令/directives/index"

createApp(App).use(directives).mount('#app')
