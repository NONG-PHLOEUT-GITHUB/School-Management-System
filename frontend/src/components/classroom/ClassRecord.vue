<template>hello</template>
<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '@/stores/users.js'
import { useClassroomStore } from '@/stores/classroom.js'

const usersStore = useUsersStore()
const classroomStore = useClassroomStore()

onMounted(async () => {
  try {
    await usersStore.fetchAllUsersData()
    await classroomStore.fetchAllClassrooms()
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
</script>
