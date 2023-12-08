<template>
  <div>
    <!-- <bread-crumb :path-titles="pathTitle" /> -->
    <custom-title right-icon="mdi-information-outline">
      <!-- <v-btn small icon class="white mr-2" @click="goBack" variant="text">
        <v-icon small> mdi-arrow-left </v-icon>
      </v-btn> -->
      <!-- <span class="d-inline-block capitalize-first-letter">{{
        pageSubTitle
      }}</span> -->
    </custom-title>
    <v-card class="pa-4">
      <custom-title icon="mdi-information-variant-circle-outline">
        <span class="d-inline-block capitalize-first-letter"
          >Classroom infomation</span
        >
      </custom-title>
      <v-row class="mt-2 px-3">
        <v-text-field
          class="me-3"
          variant="outlined"
          v-model="classroom_name"
        ></v-text-field>
        <v-text-field variant="outlined" v-model="description"></v-text-field>
      </v-row>
      <custom-title icon="mdi-clipboard-account">
        <span class="d-inline-block capitalize-first-letter"
          >Classroom assigne</span
        >
      </custom-title>
      <v-row class="mt-2">
        <v-col>
          <v-select
            v-model="select"
            :items="items"
            item-title="full_name"
            item-value="id"
            :hint="
              select ? `${select.full_name}, ${select.id}` : 'Select an item'
            "
            label="Select"
            persistent-hint
            return-object
            single-line
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
      <custom-title>
        <template #right>
          <v-btn @click="submitForm" class="me-5" color="primary">Cancel</v-btn>
          <v-btn @click="submitForm">Create</v-btn>
        </template>
      </custom-title>
    </v-card>
  </div>
  <!-- {{ editedClassroom.classroom_name }} -->
</template>

<script setup>
import { useClassroomStore } from '@/stores/classroom.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const classroomStore = useClassroomStore()
const router = useRouter()
let description = ref('')
let classroom_name = ref('')
let select = ref('')
let items = ref([])
const editedClassroom = ref(null)

const submitForm = async () => {
  const classroom = {
    classroom_name: classroom_name.value,
    description: description.value,
    teacher_id: select.value.id
  }
  classroomStore.create(classroom)
  await router.push({ name: 'ClassManagement' })
}

onMounted(async () => {
  try {
    await classroomStore.fetchClassCoordinators()
    editedClassroom.value = router.currentRoute.value.query.editedClassroom
    console.log('in form for edite',editedClassroom.value);
    items.value = classroomStore.classCoordinator.data
  } catch {
    console.log('error fetching classes')
  }
})
</script>
