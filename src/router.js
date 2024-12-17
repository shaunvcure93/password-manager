import { createRouter, createWebHashHistory } from 'vue-router';
import login from './pages/login.vue';
import error from './pages/error.vue';
import register from './pages/register.vue';
import forget from './pages/forget.vue';
import home from './pages/home.vue';
import dashboard from './layout/dashboard.vue';

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
      path: '/',
      redirect: { path: '/home' }, // redirect property 
      component: dashboard,
      children: [
        {
          path: '/home',
          component: home,
        },
      ],
    },
    {
      path: '/error',
      component: error
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/error'
    // }
  ]
})
