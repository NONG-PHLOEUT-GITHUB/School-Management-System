import { defineStore } from 'pinia'
import { countAllStudent } from '@/api/student.js' // Import your service

export const useStudentStore = defineStore('totalStudent', {
  state: () => ({
    totalStudents: 0 // to call to store
  }),
  actions: {
    async fetchTotalStudents() {
      try {
        const response = await countAllStudent()
        this.totalStudents = response.data // Assuming the API response contains the total count
      } catch (error) {
        console.error('Error fetching total students:', error)
      }
    }
  }
})
