import { Router, RouteRecordRaw } from 'vue-router';

const Container = () => import('./components/index.vue');
const Test2 = () => import(/* webpackChunkName: "test2" */ './components/test1.vue');

export default function updateRouter(router: Router, mountPoint: string) {
  if (!router) throw new Error('Missing router options');

  const routes: Array<RouteRecordRaw> = [
    {
      path: `${mountPoint}/test2`,
      component: Container,
      children: [
        {
          path: '/',
          name: 'test2',
          component: Test2,
        },
      ],
    },
  ];

  router.options.routes.concat(router.options.routes, routes);
}
