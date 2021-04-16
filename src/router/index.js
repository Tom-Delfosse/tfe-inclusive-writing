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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tool.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'vNotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vNotFound.vue')
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
