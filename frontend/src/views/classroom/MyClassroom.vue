<template>
  <custom-title icon="mdi-office-building">
    <span class="d-inline-block capitalize-first-letter"
      >My Classroom Management</span
    >
  </custom-title>
  <span class="mb-5">Total Classroom asign {{ classTeacher.length }}</span>
  <v-container fluid class="pa-2 mt-4">
    <v-row>
      <v-col
        class="pa-1"
        sm="6"
        md="4"
        lg="2"
        :key="index"
        v-for="(classroom, index) in classTeacher"
      >
        <v-card class="card elevation-2">
          <v-card-title class="card-title">
            <span class="text-h6 font-weight-black">{{
              classroom.classroom_name
            }}</span>
            <v-icon>mdi-school</v-icon>
          </v-card-title>

          <v-card-text class="font-weight-bold mt-1">
            <v-icon class="mb-1">mdi-account-tie</v-icon>
            <span class="ms-2"
              >{{ classroom.teacher_first_name }}
              {{ classroom.teacher_last_name }}</span
            >
          </v-card-text>
          <v-card-actions class="card-action">
            <v-card-actions>
              <v-icon>mdi-account-group-outline</v-icon>
              <span class="text-h6 font-weight-black ms-3">{{
                classroom.student_count
              }}</span>
            </v-card-actions>
            <v-btn
              :to="{ path: `/classroom/${classroom.id}/details` }"
              class="ms-5"
              variant="text"
              small
              icon="mdi-database-eye"
            ></v-btn>
            
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item
                    :value="item.title"
                    v-if="item.title === 'Delete'"
                    :style="{ color: 'red' }"
                    @click="deleteClassroom(classroom.id)"
                  >
                    {{ item.title }}
                  </v-list-item>
                  <v-list-item :value="item.title" v-else>
                    {{ item.title }}
                  </v-list-item>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useClassroomStore } from '@/stores/classroom.js'
const items = [{ title: 'Edit' }, { title: 'Delete' }]
const authStore = useAuthStore()
const classroomStore = useClassroomStore()
const classTeacher = ref([])

const deleteClassroom = async (ID) => {
  try {
    await classroomStore.deleteClassroomByID(ID)
    await authStore.fetchUser()
  } catch (error) {
    console.error('Error deleting classroom:', error)
  }
}



onMounted(async () => {
  try {
    await authStore.fetchUser()
    classroomStore.studentsInclassroom
    classTeacher.value = authStore.user.data.class_teacher
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
</script>

<style scoped>
.card-title,
.card-action {
  display: flex;
  justify-content: space-between;
}
.card-action {
  padding: 0px 5px 0px 10px;
}
</style>
