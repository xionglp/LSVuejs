import { createApp } from 'vue'
import registerDirectives from './directives';
import App from "./10-自定义指令/App.vue"

const app = createApp(App);

// 全局的mixin混入
// app.mixin({
//   data() {
//     return {

//     }
//   },
//   methods: {

//   },
//   created() {
//     console.log("全局mixin")
//   }
// })

registerDirectives(app)

app.mount('#app')
