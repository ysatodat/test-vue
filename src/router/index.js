import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/App.vue'
import Dev from '@/views/Dev.vue'
const routes = [
  {
      path: '/',
      name: 'Top',
      component: Top,
  },
  {
      path: '/dev',
      name: 'dev',
      component: Dev,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router