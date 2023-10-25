import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/auth/LoginPage'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/HomeView.vue')
  // },
  {
    path: '/dashboard/user',
    name: 'dashboard',
    component: () => import('../views/admin/UserManagement.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/auth/ResetPasswordPage.vue')
  },
  {
    path: '/class-component',
    name: 'class-component',
    component: () => import('../components/classManagement/ClassComponent')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
