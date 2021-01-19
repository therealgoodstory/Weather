import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Setting from '../views/Setting.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
