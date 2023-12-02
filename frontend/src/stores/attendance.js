import { defineStore } from "pinia";
import { fetchUserAttendance } from "@/api/attendance.js"; // Import your service

export const useAttendaceStore = defineStore("attendance", {
  state: () => ({
    attendance: [], // to call to store
  }),
  actions: {
    async getStudentAttendance() {
      try {
        const response = await fetchUserAttendance();
        this.attendance = response.data;
        console.log('studentAttendance');
      } catch (error) {
        console.error("Error fetching total students:", error);
      }
    },
  },
});
