import { defineStore } from 'pinia'
import { countAllTeacher } from '@/api/teacher.js' // Import your service
// import { useLoadingStore } from './loading'
// const loadingStore = useLoadingStore()

export const useTeacherStore = defineStore('totalTeacher', {
  state: () => ({
    totalTeachers: 0
  }),
  actions: {
    async fetchTotalTeachers() {
      try {
        // loadingStore(true)
        const response = await countAllTeacher()
        this.totalTeachers = response.data // Assuming the API response contains the total count
        // loadingStore(false)
      } catch (error) {
        console.error('Error fetching total teacher:', error)
      }
    }
  }
})
