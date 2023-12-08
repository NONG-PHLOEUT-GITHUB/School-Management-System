import { defineStore } from 'pinia'
import {
  fetchAllClassroom,
  fetchClassCoordinator,
  fetchTotalClass,
  deleteClassroom,
  createClassroom,
  editClassroom
} from '@/api/classroom.js' // Import your service
import { useLoadingStore } from './loading'

export const useClassroomStore = defineStore('getClassroom', {
  state: () => ({
    classrooms: [], // to call to store
    classCoordinator: [], // to call to store
    totalClassrooms: 0,
    classroomStore: null,
    classRoomEdit:[]
  }),
  getters: {
    classroom: (state) => state.classroomStore
  },
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
        console.log('class codi', this.classCoordinator)
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

    async create({ classroom_name, description, teacher_id }) {
      const loadingStore = useLoadingStore()
      loadingStore.setLoading(true)
      try {
        const response = await createClassroom(
          classroom_name,
          description,
          teacher_id
        )
        this.classroomStore = response.data.classroom
        loadingStore.setLoading(false)
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },

    async edit(id) {
      const loadingStore = useLoadingStore()
      loadingStore.setLoading(true)
      try {
        const response = await editClassroom(id)
        this.classRoomEdit = response.data
        console.log('edit store', this.classRoomEdit)
        loadingStore.setLoading(false)
      } catch (error) {
        loadingStore.setLoading(false)
        console.error('Error fetching total class:', error)
      }
    },

    async updateClassroom() {
      try {
        await editClassroom(`/api/classroom/edit/${this.classrooms.id}`)
        // this.classrooms = updatedClassroom
        // console.log('Classroom updated:', updatedClassroom)
      } catch (error) {
        console.error('Error updating classroom:', error)
      }
    },

    async deleteClassroomByID(ID) {
      const loadingStore = useLoadingStore()
      try {
        loadingStore.setLoading(true)
        await deleteClassroom(ID)
        const response = await fetchClassCoordinator()
        loadingStore.setLoading(false)
        this.classCoordinator = response.data
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    }
  }
})
