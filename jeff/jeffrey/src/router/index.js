import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('../views/SportPage.vue')

  },
  {
    path: '/headshots',
    name: 'headshots',
    component: () => import('../views/Headshots.vue')

  },
  {
    path: '/nature',
    name: 'nature',
    component: () => import('../views/Naturepage.vue')

  },
  {
    path: '/senior-photos',
    name: 'seniorphotos',
    component: () => import('../views/SeniorPhotos.vue')

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
