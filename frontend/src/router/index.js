import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginPage from '@/views/auth/LoginPage'
import UserProfile from '@/views/userInfo/UserProfile.vue'
import MainLayout from '@/components/layout/Layout.vue'
// import Comment from "@/views/comment/Comment.vue";
import UserInformation from '@/views/userInfo/UserInformation.vue'
import LayoutUserDetail from '@/components/user/LayoutUserDetail.vue'
import ClassRecord from '@/components/classroom/ClassRecord.vue'
import ClassRecordView from '@/views/classroom/ClassRecord.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'layout',
    component: MainLayout,
    children: [
      {
        path: '/profile/user',
        name: 'profile-user',
        component: UserProfile,
        redirect: '/user/about-me',
        children: [
          {
            path: '/profile/comments/user',
            name: 'profileCommentRecord',
            component: ClassRecord
          },
          {
            path: '/user/about-me',
            name: 'AboutMe',
            component: UserInformation
          }
        ]
      },
      {
        path: '/dashboard/user',
        name: 'dashboard',
        component: () => import('../views/admin/DashboardView.vue')
      },
      {
        path: '/dashboard/user',
        name: 'dashboard',
        component: () => import('../views/admin/DashboardView.vue')
      },
      {
        path: '/user-management',
        name: 'user-management',
        component: () => import('../views/admin/UserManagement.vue')
      },
      {
        path: '/chnage-password',
        name: 'change-password',
        component: () => import('../views/auth/ChangePassword.vue')
      },
      {
        path: '/class-management',
        name: 'ClassManagement',
        component: () => import('../views/admin/ClassManagement.vue')
      },
      {
        path: '/crud/classroom',
        name: 'addClassroom',
        component: () => import('../views/crud/Classroom.vue')
      },
      {
        path: '/teacher/classroom',
        name: 'teacherClassroom',
        component: () => import('../views/classroom/MyClassroom.vue')
      },
      {
        path: '/classroom/:id/details',
        name: 'studentsClassroom',
        component: () => import('../views/classroom/StudentInClassroom.vue')
      },
      // {
      //   path: '/user/:id/details',
      //   name: 'UserDetail',
      //   component: () => import('../views/userInfo/UserInfoDetails.vue')
      // },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('../views/comment/Comment.vue')
      },
      {
        path: '/feedback/teacher',
        name: 'feedback',
        component: () => import('../views/comment/Feedback.vue')
      },
      {
        path: '/attendance-tracking',
        name: 'AttendanceTracking',
        component: () => import('../views/attendance/AttendanceTracking.vue')
      },
      {
        path: '/student/dshaboard',
        name: 'StudentSheet',
        component: () => import('../views/student/StudentDashboard.vue')
      },
      {
        path: '/crud/user',
        name: 'crudUser',
        component: () => import('../views/crud/UserCrud.vue')
      },
      {
        path: '/comment/student',
        name: 'CommentStudent',
        component: () => import('../views/comment/Comment.vue')
      },
      {
        path: '/my-attendance',
        name: 'myAttendance',
        component: () => import('@/views/attendance/MyAttendance.vue')
      },
      {
        path: '/my-score',
        name: 'myScore',
        component: () => import('@/views/score/MyScore.vue')
      },
      {
        path: '/dashboard/student',
        name: 'studentDashboard',
        component: () => import('@/views/dashboard/StudentDashboard.vue')
      },
      {
        path: '/layout-user-detail',
        name: 'LayourUserDetail',
        component: LayoutUserDetail,
        redirect: '/profile/comment',
        children: [
          {
            path: '/user-detail/class-record',
            name: 'profileComment',
            component: ClassRecordView
          },
          {
            path: '/user-detail/academic-record',
            name: 'detailAcademic',
            component: () => import('@/views/academic/AcademicRecord.vue')
          },
          {
            path: '/user-detail/attendance-record',
            name: 'detailAttendance',
            component: () => import('@/views/attendance/AttendanceRecord.vue')
          },
          // {
          //   path: '/user/details',
          //   name: 'UserDetail',
          //   component: () => import('../views/userInfo/UserInfoDetails.vue')
          // }
        ]
      }
    ]
  },
  {
    path: '/reset-new-password/:token',
    name: 'reset-password',
    component: () => import('../views/auth/ResetPassword.vue')
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: () => import('../views/auth/ForgetPassword.vue')
  },
  {
    path: '/chnage-password',
    name: 'chnage-password',
    component: () => import('../views/auth/ForgetPassword.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('../views/common/NotFount.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0, behavior: 'smooth' }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   const userStore = useAuthStore()
//   const isAuthenticated = userStore.isAuthenticated
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })
router.beforeEach((to, from, next) => {
  const userStore = useAuthStore()
  const isAuthenticated = userStore.isAuthenticated
  const token = localStorage.getItem('access_token')

  if (to.name !== 'Login' && !isAuthenticated && !token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
