import { createApp } from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

createApp(App).use(router).mount('#app')
//将router作为默认导出
export default router


