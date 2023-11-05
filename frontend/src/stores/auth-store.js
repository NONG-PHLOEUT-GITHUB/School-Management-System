import { defineStore } from "pinia";
import { fetchUserLoged } from "@/services/auth.js";

export const useUserStore = defineStore("authUser", {
  state: () => ({
    authUser: null,
  }),
  getters:{
    user: (state) => state.authUser
  },
  actions: {
    async fetchUser() {
      const data = await fetchUserLoged();
      this.authUser = data.data;
    },
  },
});
