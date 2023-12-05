<template>
  <div>
    <v-card>
      <custom-title icon="mdi-home">
        <span class="d-inline-block capitalize-first-letter"
          >Classroom infomation</span
        >
      </custom-title>

      <v-card variant="tonal" class="px-5">
        <v-row class="mt-2">
          <v-text-field
            class="me-3"
            variant="outlined"
            v-model="classroom_name"
          ></v-text-field>
          <v-text-field variant="outlined" v-model="description"></v-text-field>
        </v-row>
      </v-card>
      <custom-title icon="mdi-home">
        <span class="d-inline-block capitalize-first-letter"
          >Classroom assigne</span
        >
      </custom-title>
      <v-card variant="tonal" class="px-5">
        <v-row class="mt-2">
          <!-- <v-col>
            <v-combobox
              class="me-2"
              chips
              label="Class Coordinator"
              v-model="selectedCoordinator"
              :items="getCoordinatorOptions()"
              item-text="displayName"
              item-value="value"
              variant="outlined"
            ></v-combobox>
          </v-col> -->
          <v-col>
            <v-combobox
              chips
              label="Teacher assigned"
              v-model="selectedTeacher"
              :items="getTeacherOptions()"
              item-text="displayName"
              item-value="value"
              variant="outlined"
            ></v-combobox>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    {{ displayName }}
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import { useClassroomStore } from '@/stores/classroom.js'
import { ref, onMounted } from 'vue'
const selectedTeacher = ref(null)
// const selectedCoordinator = ref(null);

const classroomStore = useClassroomStore()
onMounted(async () => {
  try {
    classroomStore.fetchClassCoordinators()
  } catch {
    console.log('error fetching classes')
  }
})

const getTeacherOptions = () => {
  if (classroomStore.classCoordinator && classroomStore.classCoordinator.data) {
    return classroomStore.classCoordinator.data.map((teacher) => ({
      displayName: `${teacher.first_name} ${teacher.last_name}`,
      value: teacher.id
    }))
  } else {
    return []
  }
}

const submitForm = () => {
  // You can now use the selectedTeacher.value in your form submission logic
  console.log('Selected Teacher ID:', selectedTeacher.value.value)
}
</script>
