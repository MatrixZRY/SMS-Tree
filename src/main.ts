import { createApp } from 'vue';

/**重置样式*/
import'@unocss/reset/tailwind.css'
import'./style.css'
import'uno.css'

import App from'./App.vue'

createApp(App).mount('#app')

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './components/App.vue';

// Styles
import './styles/element-override.scss';
import './styles/index.scss';

import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';

// Pinia store
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import router from './router';

// Create app
const app = createApp(App);

// Register el icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(router);
app.mount('#app');
