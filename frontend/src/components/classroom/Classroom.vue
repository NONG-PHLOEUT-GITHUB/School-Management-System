<template>
  <!-- <v-btn>Create Class</v-btn> -->
  <custom-title icon="mdi-google-classroom">
    <span class="d-inline-block capitalize-first-letter">Class Management</span>
    <template #right>
      <v-btn
        class="mr-2"
        small
        elevation="0"
        color="secondary"
        @click="addClassroom"
        >add</v-btn
      >
      <v-btn
        icon="mdi-filter"
        variant="text"
        class="mr-2 filter-btn"
        :class="{ active: toggleFilter }"
        small
        elevation="0"
        @click="updateToggle"
      >
        <!-- {{ $t('btn.filter') }} -->
        <v-icon small> mdi-filter </v-icon>
      </v-btn>
      <v-btn small icon class="white" variant="text">
        <v-icon small> mdi-information-outline </v-icon>
      </v-btn>
    </template>
  </custom-title>
  <v-card
    tile
    elevation="0"
    v-if="toggleFilter"
    color="indigo-lighten-5"
    class="px-3 mb-3"
  >
    <v-row>
      <v-col cols="12" md="11">
        <v-row color="transparent" class="mt-4">
          <v-col cols="3" :md="4" color="transparent">
            <v-text-field
              v-model="searchClassroom.classroom_name"
              :label="$t('filterFrom.filterTeacher')"
              @keyup="searchData()"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="3" :md="4">
            <v-text-field
              v-model="searchClassroom.student_count"
              :label="$t('filterFrom.filterTeacher')"
              @keyup="searchData()"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-text-field>
          </v-col>

          <v-col cols="3" :md="4" color="transparent">
            <v-text-field
              v-model="searchClassroom.classCoordinatorName"
              :label="$t('filterFrom.filterStatuse')"
              @keyup="searchData()"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="1" class="mt-5">
        <v-card class="d-flex justify-end elevation-0" color="transparent">
          <v-btn
            class="elevation-0 search-btn mt-4"
            small
            variant="outlined"
            @click="clearFilter"
          >
            clear
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <v-container fluid class="pa-2" style="height: 80vh">
    <v-row>
      <!--sm Display 2 cards per row on small screens -->
      <!--md Display 3 cards per row on medium screens -->
      <!--lg Display 4 cards per row on large screens -->
      <v-col
        class="pa-1"
        sm="6"
        md="4"
        lg="2"
        :key="index"
        v-for="(classroom, index) in filteredClassrooms"
      >
        <!-- v-for="(classroom, index) in classroomStore.classrooms.data" -->
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
              >
              <!-- {{ classroom.first_name }}
              {{ classroom.last_name }} -->
              {{ classroom.first_name.slice(0, 10) }}
              {{ classroom.last_name.slice(0, 5) }}
              </span
            >
          </v-card-text>
          <v-card-actions class="card-action">
            <v-card-actions>
              <v-icon>mdi-account-group-outline</v-icon>
              <span class="text-h6 font-weight-black ms-3">{{
                classroom.student_count
              }}</span>
            </v-card-actions>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn size="small" v-bind="props">
                  <v-icon size="x-large">mdi-dots-vertical</v-icon>
                </v-btn>
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
                  <v-list-item
                    :value="item.title"
                    v-else
                    @click="editClassroom(classroom.id)"
                  >
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
  <!-- <v-pagination
    class="mt-4"
    v-model="page"
    :length="totalPages"
    rounded="circle"
  ></v-pagination>
  {{ searchClassroom }} -->
</template>

<script setup>
import { ref, onMounted,getCurrentInstance } from 'vue'
import { useClassroomStore } from '@/stores/classroom.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = [{ title: 'Edit' }, { title: 'Delete' }]
const toggleFilter = ref(false)
const classroomStore = useClassroomStore()
const searchClassroom = ref({ student_count: null, classroom_name: '' })
let filteredClassrooms = ref([])
// const itemsPerPage = 24
// const page = ref(1)
const app = getCurrentInstance()

// const totalPages = computed(() =>
//   Math.ceil(filteredClassrooms.value.length / itemsPerPage)
// )

// const paginatedClassrooms = computed(() => {
//   const startIndex = (page.value - 1) * itemsPerPage
//   const endIndex = startIndex + itemsPerPage
//   return filteredClassrooms.value.slice(startIndex, endIndex)
// })

const deleteClassroom = async () => {
  try {
    // await classroomStore.deleteClassroomByID(ID)
    app.appContext.config.globalProperties.$confirm(
      ('button.delete'),
      ('session.sureDelete'),
      { color: 'error' }
    )
    await loadDataFromServer()
    await performSearch()
  } catch (error) {
    console.error('Error deleting classroom:', error)
  }
}

const editClassroom = async (id) => {
  try {
    await classroomStore.edit(id)
    // const editedClassroom = classroomStore.classRoomEdit
    // console.log('classroom edite in click edit',classroomStore.classRoomEdit.data);
    await router.push({
      name: 'addClassroom',
      query: { id: id }
    })
  } catch (error) {
    console.error('Error deleting classroom:', error)
  }
}

const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}

const performSearch = async () => {
  console.log('classfiler', classroomStore.classrooms)
  filteredClassrooms.value = classroomStore.classrooms.data.filter(
    (classroom) => {
      const matchStudentCount = searchClassroom.value.student_count
        ? Number(classroom.student_count) ===
          Number(searchClassroom.value.student_count)
        : true

      const matchClassroomName =
        classroom?.classroom_name
          ?.toLowerCase()
          .includes(searchClassroom.value.classroom_name.toLowerCase()) || false
      return matchStudentCount && matchClassroomName
    }
  )
}

const searchData = () => {
  performSearch()
}

const loadDataFromServer = async () => {
  await classroomStore.fetchAllClassrooms()
}

const clearFilter = async () => {
  searchClassroom.value.classroom_name = ''
  searchClassroom.value.student_count = ''
  await loadDataFromServer()
  await performSearch()
}

const addClassroom = async () => {
  await router.push({ name: 'addClassroom' })
}

onMounted(async () => {
  await loadDataFromServer()
  await performSearch()
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
