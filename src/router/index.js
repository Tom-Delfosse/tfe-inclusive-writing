import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Tool',
    name: 'Tool',
    component: () => import('../views/Tool.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'vNotFound',
    component: () => import('../views/vNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'nav__link--active',
  linkExactActiveClass: 'nav__link--active-exact',
  scrollBehavior (to, from, savedPosition) {
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router
