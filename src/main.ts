import { createApp } from 'vue';
import test1 from '@/features/test1';
import test2 from '@/features/test2';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  // features
  .use(test1, router)
  .use(test2, router)
  .mount('#app');
