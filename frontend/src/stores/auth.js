import { defineStore } from 'pinia';
import { userLogin } from '@/services/auth.js'; // Import your service
// Authentication
/**
 * login
 * @param {string} email
 * @param {string} password
 * @returns
 */

// auth.js

// Define the store
// auth.js
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    visible: false,
  }),
  getters: {
    // Create a computed property to get the 'visible' state
    isVisible() {
      return this.visible;
    },
  },
  actions: {
    async login({ email, password }) {
      try {
        // Call the UserLogin service with email and password
        const response = await userLogin(email, password);

        // Handle the response and set the user and authentication status
        if (response.status === 200) {
          this.user = response.data; // Assuming your user data is in the response
          this.isAuthenticated = true;

          // Set the token in local storage
          localStorage.setItem('token', response.data.token);

          // Push to the router path
          const router = useRouter();
          await router.push({ path: '/' });
        } else {
          // Handle errors or unauthorized access
          console.error('Login failed:', response.data);
        }
      } catch (error) {
        // Handle any network or other errors
        console.error('An error occurred:', error);
      }
    },
    // Add your logout action here if needed
    // Create a mutation to toggle the 'visible' state
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
});



  