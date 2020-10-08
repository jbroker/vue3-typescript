import { Router, RouteRecordRaw } from 'vue-router';

const Container = () => import('./components/index.vue');
const Test1 = () => import(/* webpackChunkName: "test1" */ './components/test1.vue');

export default function updateRouter(router: Router) {
  console.log('BLEP', router.getRoutes());
  if (!router) throw new Error('Missing router options');

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/test1',
      component: Container,
      children: [
        {
          path: 'main',
          name: 'test1',
          component: Test1,
        },
      ],
    },
  ];

  routes.forEach(x => router.addRoute(x));
  console.log('WHAT IS THIS', router.getRoutes());
}
