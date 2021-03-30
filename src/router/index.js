import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/pc',
    name: 'Pc',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc')
  },
  {
    path: '/mobile',
    name: 'Mobile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router