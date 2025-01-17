import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  // 确保引入 Element Plus 的样式
import App from './App.vue';
import './styles/theme.css';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app');
