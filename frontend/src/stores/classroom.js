import { defineStore } from "pinia";
import { fetchAllClassroom ,fetchClassCoordinator} from "@/api/classroom.js"; // Import your service

export const useClassroomStore = defineStore("getClassroom", {
  state: () => ({
    classrooms: [], // to call to store
    classCoordinator: [], // to call to store
  }),
  actions: {
    async fetchAllClassrooms() {
      try {
        const response = await fetchAllClassroom();
        this.classrooms = response.data; // Assuming the API response contains the total count
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },
    async fetchClassCoordinators() {
      try {
        const response = await fetchClassCoordinator();
        this.classCoordinator = response.data;
        // console.log('in store',response.data.data.data);
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },
  },
});