import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import nprogress from '@/plugins/nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutView.vue')
    }
  ]
})

const plugins = [
  nprogress
]

plugins.forEach(plugin => plugin({ router }))

export default router
