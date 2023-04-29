import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import ElementPlus from 'element-plus' // 引入Element Plus 所需
import 'element-plus/dist/index.css' // 引入Element Plus 所需
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入Element Plus icon 所需

const app = createApp(App)

// 引入Element Plus icon 所需
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus) // 引入Element Plus 所需
app.use(createPinia())
app.use(router)

app.mount('#app')
