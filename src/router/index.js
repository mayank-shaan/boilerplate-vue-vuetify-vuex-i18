import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EmptyView from '../views/EmptyView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'default' },
    component: Home,
  },
  {
    path: '/about',
    meta: { layout: 'no-titlebar' },
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/driver',
    name: 'Driver',
    component: EmptyView,
    meta: { layout: 'default' },
  },
  {
    path: '/driver/profile',
    name: 'Profile',
    meta: { layout: 'no-titlebar' },
    component: () => import(/* webpackChunkName: "driver-profile" */ '../views/driver/DriverProfile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
