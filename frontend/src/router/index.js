import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/auth/LoginPage";
import UserProfile from "@/views/user-infor/UserProfile.vue";
import MainLayout from "@/components/layout/LayoutComponent.vue";
const routes = [
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
    ],
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/auth/ResetPasswordPage.vue"),
  },
  {
    path: "/class-component",
    name: "class-component",
    component: () => import("../components/classManagement/ClassComponent"),
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
