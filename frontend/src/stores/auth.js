import { defineStore } from "pinia";
import { userLogin, fetchUserLoged ,forgotPassword,resetNewPassword } from "@/services/auth.js";
import { useLoadingStore } from './loading';
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
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(true);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_role");
      this.isAuthenticated = false;
      loadingStore.setLoading(false);
    },
    async forgotPassword(email) {
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(true);
      try{
        const response = await forgotPassword(email);
        if(response.data.status === 'success'){
          this.isResetPassword = true;
        }else{
          this.isResetPassword = false;
        }
      }catch(error){
        console.error('Error reset passw:', error);
      }finally {
        // Set loading to false when the request is complete (either success or failure)
        loadingStore.setLoading(false);
      }
    },
    async userResetNewPassword(token,password,password_confirmation) {
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(true);
      try{
        const response = await resetNewPassword(token,password,password_confirmation);
        if(response.data.status === 'success'){
          this.authUser = response.data.user;
          this.isReset = true;
          localStorage.setItem("access_token", response.data.access_token);
        }else{
          this.isReset = false;
        }
      }catch(error){
        console.error('Error reset passw:', error);
      }finally{
        loadingStore.setLoading(false);
      }
    }
  },
});