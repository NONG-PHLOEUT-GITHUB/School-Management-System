import { defineStore } from "pinia";
import {
  fetchAllClassroom,
  fetchClassCoordinator,
  fetchTotalClass,
  deleteClassroom
} from "@/api/classroom.js"; // Import your service

export const useClassroomStore = defineStore("getClassroom", {
  state: () => ({
    classrooms: [], // to call to store
    classCoordinator: [], // to call to store
    totalClassrooms: [], // to store
  }),
  actions: {
    async fetchAllClassrooms() {
      try {
        const response = await fetchAllClassroom();
        this.classrooms = response.data;
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },
    async fetchClassCoordinators() {
      try {
        const response = await fetchClassCoordinator();
        this.classCoordinator = response.data;
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },

    async getTotalClass() {
      try {
        const response = await fetchTotalClass();
        this.totalClassrooms = response.data.data;
        console.log("class total", this.totalClassrooms);
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },

    async deleteClassroomByID(ID) {
      try {
        await deleteClassroom(ID);
      } catch (error) {
        console.error("Error fetching total class:", error);
      }
    },
  },
});
