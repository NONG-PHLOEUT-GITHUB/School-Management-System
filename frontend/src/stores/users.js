import { defineStore } from "pinia";
import { fetchAllUsers } from "@/services/users.js";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: null,
  }),
  actions: {
    async fetchAllUsersData() {
      try {
        const response = await fetchAllUsers();
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching total students:", error);
      }
    },
  },
});
