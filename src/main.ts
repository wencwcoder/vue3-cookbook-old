import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import './assets/main.css'

const app = createApp(App)
// 处理错误
// app.config.errorHandler = (err) => {}
// 获取原型，绑定参数
const prototype = app.config.globalProperties
prototype.test = 'test'
// 组件通信：mitt.js -- 可以绑定到原型上

app.use(createPinia())
// app.use(router)
app.mount('#app')
