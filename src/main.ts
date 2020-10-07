import { createApp } from 'vue';
import test1 from '@/features/test1';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(test1, router)
  .mount('#app');
