import { Router, RouteRecordRaw } from 'vue-router';

const Container = () => import('./components/index.vue');
const Test2 = () => import(/* webpackChunkName: "test2" */ './components/test2.vue');

export default function updateRouter(router: Router) {
  if (!router) throw new Error('Missing router options');

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/test2',
      component: Container,
      children: [
        {
          path: 'main',
          name: 'test2',
          component: Test2,
        },
      ],
    },
  ];

  routes.forEach(x => router.addRoute(x));
}
