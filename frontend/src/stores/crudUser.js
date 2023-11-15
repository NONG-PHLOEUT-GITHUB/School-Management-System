import { defineStore } from 'pinia';
import { createUser } from "@/services/crudUser.js"; // Import your service

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    async createUser() {
        try {
          const response = await createUser();
          this.users.push(response.data); 
        } catch (error) {
          console.error("Error fetching total class:", error);
        }
      },
  },
});
