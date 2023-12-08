<template>
  <div>
    <bread-crumb :path-titles="pathTitle" /> 
    <custom-title right-icon="mdi-information-outline">
      <v-btn small icon class="white mr-2" @click="goBack" variant="text">
        <v-icon small> mdi-arrow-left </v-icon>
      </v-btn>
      <span class="d-inline-block capitalize-first-letter">{{
        pageSubTitle
      }}</span>
    </custom-title>
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
      <v-card variant="tonal" class="px-2">
        <v-row class="mt-2">
          <v-col>
            <v-select
              clearable
              label="Select"
              v-model="selectedTeacher"
              :items="teacherOptionsList"
              item-value="value"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
    </v-card>

    {{ selectedTeacher }}
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import BreadCrumb from '@/components/global/BreadCrumb.vue';
import { useClassroomStore } from '@/stores/classroom.js'
import { ref, onMounted, computed } from 'vue'
const selectedTeacher = ref(null)
const teacherOptions = ref([])
const pageTitle = ref('Your Page Title'); // Provide an initial value
const pageSubTitle = ref(''); // Provide an initial value

const classroomStore = useClassroomStore()

const getTeacherOptions = async () => {
  if (classroomStore.classCoordinator && classroomStore.classCoordinator.data) {
    return classroomStore.classCoordinator.data.map((teacher) => ({
      displayName: `${teacher.first_name} ${teacher.last_name}`,
      value: teacher.id
    }))
  } else {
    return []
  }
}


const teacherOptionsList = computed(() => {
  return teacherOptions.value.map((item) => item.displayName)
})

const pathTitle = computed(() => {
  console.log('page title',pageSubTitle.value);
  const titles = [
    {
      text: pageTitle.value,
      to: { name: 'ClassManagement' },
      exact: true,
    },
  ];

  if (pageSubTitle.value.trim() !== '') {
    titles.push({
      text: pageSubTitle.value,
    });
  }

  return titles;
});


const submitForm = () => {
  console.log('Selected Teacher ID:', selectedTeacher.value.value)
}

onMounted(async () => {
  try {
    console.log('teacher opiton', teacherOptions.value)
    classroomStore.fetchClassCoordinators()
    selectedTeacher.value = await getTeacherOptions()
    console.log('teacher', selectedTeacher.value)
    console.log('First displayName:', selectedTeacher.value[0]?.displayName)
    console.log('log key', Object.keys(selectedTeacher.value))
    let roles = Object.keys('role', selectedTeacher)
    console.log(roles)
  } catch {
    console.log('error fetching classes')
  }
})
</script>
