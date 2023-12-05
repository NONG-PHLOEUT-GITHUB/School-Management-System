import { defineStore } from "pinia";
import { countAllStudent } from "@/api/student.js"; // Import your service
import { useLoadingStore } from "./loading";
const loadingStore = useLoadingStore();
export const useStudentStore = defineStore("totalStudent", {
  state: () => ({
    totalStudents: 0, // to call to store
  }),
  actions: {
    async fetchTotalStudents() {
      try {
        const response = await countAllStudent();
        loadingStore.setLoading(true);
        this.totalStudents = response.data; // Assuming the API response contains the total count
        loadingStore.setLoading(false);
      } catch (error) {
        console.error("Error fetching total students:", error);
      }
    },
  },
});
