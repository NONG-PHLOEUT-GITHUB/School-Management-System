import { defineStore } from 'pinia'
import {
  fetchAllClassroom,
  fetchClassCoordinator,
  fetchTotalClass,
  deleteClassroom
} from '@/api/classroom.js' // Import your service

export const useClassroomStore = defineStore('getClassroom', {
  state: () => ({
    classrooms: [], // to call to store
    classCoordinator: [], // to call to store
    totalClassrooms: 0
  }),
  actions: {
    async fetchAllClassrooms() {
      try {
        const response = await fetchAllClassroom()
        this.classrooms = response.data
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },
    async fetchClassCoordinators() {
      try {
        const response = await fetchClassCoordinator()
        this.classCoordinator = response.data
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },

    async getTotalClass() {
      try {
        const response = await fetchTotalClass()
        this.totalClassrooms = response.data.data
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },

    async deleteClassroomByID(ID) {
      try {
        await deleteClassroom(ID)
        const response = await fetchClassCoordinator()
        this.classCoordinator = response.data
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    }
  }
})
