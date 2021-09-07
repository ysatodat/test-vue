import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/views/Top.vue'
import Dev from '@/views/Dev.vue'
const routes = [
  {
      path: '/',
      name: 'Top',
      component: Top,
  },
  {
      path: '/dev',
      name: 'Dev',
      component: Dev,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router