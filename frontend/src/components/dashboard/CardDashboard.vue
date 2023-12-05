<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">
      <v-col v-for="(card, index) in cards" :key="index" cols="0">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            class="mx-auto elevation-3 rounded-xl"
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            :color="isHovering ? card.color : undefined"
          >
            <v-card-text>
              <div class="d-flex justify-center align-center">
                <v-icon size="48" class="mr-2">{{ card.icon }}</v-icon>
                <div>
                  <div class="text-h6">{{ card.title }}</div>
                  <div class="text-h3 font-weight-bold">{{ card.value }}</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStudentStore } from '@/stores/student'
import { useTeacherStore } from '@/stores/teacher'
import { useClassroomStore } from '@/stores/classroom'
import { useI18n } from 'vue-i18n'

const studentStore = useStudentStore()
const teacherStore = useTeacherStore()
const totaClassroomStore = useClassroomStore()

const { t } = useI18n()

const cards = [
  {
    icon: 'mdi-account-group',
    title: t('dashboard.studentTotal'),
    value: computed(() => studentStore.totalStudents),
    color: 'pink-accent-3'
  },
  {
    icon: 'mdi-account-tie',
    title: t('dashboard.teacherTotal'),
    value: computed(() => teacherStore.totalTeachers),
    color: 'pink-accent-3'
  },
  {
    icon: 'mdi-school',
    title: t('dashboard.classroomTotal'),
    value: computed(() => totaClassroomStore.totalClassrooms),
    color: 'pink-accent-3'
  },
  {
    icon: 'mdi-calendar-month',
    title: 'Next Event',
    value: '9',
    color: 'pink-accent-3'
  }
]

// Fetch the totalStudents and totalTeachers values on component mount
onMounted(async () => {
  try {
    await studentStore.fetchTotalStudents()
    await teacherStore.fetchTotalTeachers()
    await totaClassroomStore.getTotalClass()
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
</script>
