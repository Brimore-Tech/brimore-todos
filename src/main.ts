import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'ant-design-vue/dist/antd.css';

createApp(App)
  .use(store)
  .mount('#app');
