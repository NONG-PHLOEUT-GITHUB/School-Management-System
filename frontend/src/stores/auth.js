import { defineStore } from 'pinia';
import { userLogin } from '@/services/auth.js';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async login({ email, password }) {
      try {
        const response = await userLogin(email, password);
        if (response.status === 200) {
          this.user = response.data; 
          this.isAuthenticated = true;

          // Set the token in local storage
          localStorage.setItem('access_token', response.data.access_token);

        } else {
          console.error('Login failed:', response.data);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    logout() {
      localStorage.removeItem('access_token');
      // Reset the authentication state
      this.isAuthenticated = false;
    },
  },
});



  