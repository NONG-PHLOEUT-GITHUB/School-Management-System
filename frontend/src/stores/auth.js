import { defineStore } from "pinia";
import { userLogin,fetchUserLoged } from "@/services/auth.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    isAuthenticated: false,
  }),
  getters:{
    user: (state) => state.authUser
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
          console.error("Login failed:", response.data);
        }
      } catch (error) {
        this.isAuthenticated = false;
        console.error("An error occurred:", error);
      }
    },
    async fetchUser() {
      const data = await fetchUserLoged();

      this.authUser = data.data;
      console.log('get uer login in store',this.user);
    },
    logout() {
      localStorage.removeItem("access_token");
      // Reset the authentication state
      this.isAuthenticated = false;
    },
  },
});
