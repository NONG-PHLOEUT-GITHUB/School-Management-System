import { defineStore } from 'pinia'
import {
  fetchAllClassroom,
  fetchClassCoordinator,
  fetchTotalClass,
  deleteClassroom,
  createClassroom,
  editClassroom,
  getStudentInClassroom
} from '@/api/classroom.js' // Import your service
import { useLoadingStore } from './loading'

export const useClassroomStore = defineStore('getClassroom', {
  state: () => ({
    classrooms: [], // to call to store
    classCoordinator: [], // to call to store
    totalClassrooms: 0,
    classroomStore: null,
    classRoomEdit:[],
    studentsInclassroom: [],
  }),
  getters: {
    classroom: (state) => state.classroomStore
  },
  actions: {
    async fetchAllClassrooms() {
      try {
        const response = await fetchAllClassroom()
        this.classrooms = response.data
        console.log('class room in store',this.classrooms);
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

    async create({ classroom_name, teacher_id }) {
      const loadingStore = useLoadingStore()
      loadingStore.setLoading(true)
      try {
        const response = await createClassroom(
          classroom_name,
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
        loadingStore.setLoading(false)
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },

    async getStudentsInClassroom(id) {
      console.log('id in store',id);
      const loadingStore = useLoadingStore()
      try {
        loadingStore.setLoading(true)
        const response = await getStudentInClassroom(id)
        this.studentsInclassroom = response.data.data
        console.log('data respost',response.data.data.length);
        loadingStore.setLoading(false)
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    },

    // async classroomDetail(id) {
    //   console.log('class id', id);
    //   this.selectedClassId = id; // Set the selected class ID in the store
    //   await router.push({ name: 'studentsClassroom' });
    //   // Optionally, you can call the method to fetch student details here
    //   await this.getStudentsInClassroom(id);
    // },
  }
})
