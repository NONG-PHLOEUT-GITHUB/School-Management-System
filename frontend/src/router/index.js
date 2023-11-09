import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/auth/LoginPage";
import UserProfile from "@/views/userInfor/UserProfile.vue";
import MainLayout from "@/components/layout/LayoutComponent.vue";
import Comment from "@/views/comment/Comment.vue";
import UserInformation from "@/views/userInfor/UserInformation.vue";
import LayoutUserDetail from "@/components/user/LayoutUserDetail.vue"
import ClassRecord from "@/components/classroomManagement/ClassRecord.vue"
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
        redirect:"/user/about-me",
        children: [
          {
            path: "/profile/comments/user",
            name:"profileCommentRecord",
            component:ClassRecord
          },
          {
            path: "/user/about-me",
            name:"AboutMe",
            component:UserInformation
          },
        ],
      },
      {
        path:"/layout-user-detail",
        name:"LayourUserDetail",
        component:LayoutUserDetail,
        redirect:"/profile/comment",
        children:[
          {
            path: "/profile/comment",
            name:"profileComment",
            component:Comment
          },
        ]
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
      {
        path: "/user/detail",
        name: "UserDetail",
        component: () => import("../views/userInfor/UserDetail.vue"),
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
  // {
  //   path: "/:catchAll(.*)",
  //   name: "Not Found",
  //   component: NotFoundPage,
  // },
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
