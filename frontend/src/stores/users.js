import { defineStore } from 'pinia'
import { fetchAllUsers, deleteUsers } from '@/api/users.js'
import { useLoadingStore } from './loading'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: null
  }),
  actions: {
    async fetchAllUsersData() {
      try {
        const response = await fetchAllUsers()
        this.users = response.data
      } catch (error) {
        console.error('Error fetching total students:', error)
      }
    },
    async deleteUserData(id) {
      const loadingStore = useLoadingStore()
      try {
        loadingStore.setLoading(true)
        await deleteUsers(id)
        loadingStore.setLoading(false)
      } catch (error) {
        console.error('Error fetching total class:', error)
      }
    }
  }
})
