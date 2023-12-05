import { defineStore } from 'pinia'
import { countAllTeacher } from '@/api/teacher.js' // Import your service

export const useTeacherStore = defineStore('totalTeacher', {
  state: () => ({
    totalTeachers: 0
  }),
  actions: {
    async fetchTotalTeachers() {
      try {
        const response = await countAllTeacher()
        this.totalTeachers = response.data // Assuming the API response contains the total count
      } catch (error) {
        console.error('Error fetching total teacher:', error)
      }
    }
  }
})
