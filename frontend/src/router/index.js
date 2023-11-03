import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/auth/LoginPage";
import UserProfile from "@/views/userInfor/UserProfile.vue";
import MainLayout from "@/components/layout/LayoutComponent.vue";
const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect to the login route by default
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "layout",
    component: MainLayout,
    children: [
      {
        path: "/profile/user",
        name: "profile-user",
        component: UserProfile,
      },
      {
        path: "/dashboard/user",
        name: "dashboard",
        component: () => import("../views/admin/DashboardView.vue"),
      },
      {
        path: "/user-management",
        name: "user-management",
        component: () => import("../views/admin/UserManagement.vue"),
      },
      {
        path: "/chnage-password",
        name: "change-password",
        component: () => import("../views/auth/ChangePassword.vue"),
      },
      {
        path: "/class-management",
        name: "ClassManagement",
        component: () => import("../views/admin/ClassManagement.vue"),
      },
      {
        path: "/comment",
        name: "comment",
        component: () => import("../views/comment/Comment.vue"),
      },
    ],
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/auth/ResetPasswordPage.vue"),
  },
  {
    path: "/forget-password",
    name: "forget-password",
    component: () => import("../views/auth/ForgetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
  // routes : [
  //   {
  //     path: '/',
  //     name: 'layout',
  //     component: MainLayout,
  //     childrens:routes,
  //   }
  // ]
});

export default router;
