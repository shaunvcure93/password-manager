import { createRouter, createWebHashHistory } from 'vue-router';
import login from './pages/login.vue';
import error from './pages/error.vue';
import register from './pages/register.vue';
import forget from './pages/forget.vue';

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/forget',
      component: forget
    },
    {
      path: '/error',
      component: error
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error'
    }
  ]
})
