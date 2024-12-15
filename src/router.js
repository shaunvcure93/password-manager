import { createRouter, createWebHashHistory } from 'vue-router';
import login from './pages/login.vue';
import error from './pages/error.vue';

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/login',
      component: login
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
