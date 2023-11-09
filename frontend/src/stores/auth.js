import { defineStore } from "pinia";
import { userLogin, fetchUserLoged } from "@/services/auth.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    isAuthenticated: false,
    userRole: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async login({ email, password }) {
      try {
        const response = await userLogin(email, password);
        if (
          response.status === 200 &&
          response.data &&
          response.data.access_token
        ) {
          this.authUser = response.data.user;
          this.isAuthenticated = true;
          localStorage.setItem("access_token", response.data.access_token);
        } else {
          this.isAuthenticated = false;
        }
      } catch (error) {
        this.isAuthenticated = false;
      }
    },
    async fetchUser() {
      try {
        const data = await fetchUserLoged();
        this.authUser = data.data;
        this.userRole = data.user.role;
        localStorage.setItem("user_role",this.user.data.role);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_role");
      this.isAuthenticated = false;
    },
  },
});