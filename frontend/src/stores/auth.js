import { defineStore } from "pinia";
import { userLogin, fetchUserLoged ,forgotPassword,resetNewPassword } from "@/services/auth.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    isAuthenticated: false,
    userRole: null,
    isResetPassword: false,
    isReset: false,
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
          // localStorage.setItem("user_role",response.data.user.role);
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
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_role");
      this.isAuthenticated = false;
    },
    async forgotPassword(email) {
      try{
        const response = await forgotPassword(email);
        if(response.data.status === 'success'){
          this.isResetPassword = true;
        }else{
          this.isResetPassword = false;
        }
      }catch(error){
        console.error('Error reset passw:', error);
      }
    },
    async userResetNewPassword(token,password,password_confirmation) {
      try{
        const response = await resetNewPassword(token,password,password_confirmation);
        if(response.data.status === 'success'){
          this.isReset = true;
          localStorage.setItem("access_token", response.data.access_token);
        }else{
          this.isReset = false;
        }
      }catch(error){
        console.error('Error reset passw:', error);
      }
    }
  },
});