import { App } from 'vue';
import { Router } from 'vue-router';
import updateRouter from './update-router';

export default {
  install: (app: App, router: Router) => {
    console.log('install', router);
    updateRouter(router, '');
  },
};
