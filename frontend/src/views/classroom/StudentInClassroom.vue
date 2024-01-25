<template>
  <custom-title icon="mdi-table-large">
    <span class="d-inline-block capitalize-first-letter">User Management</span>
    <template #right>
      <!-- <v-btn icon="mdi-plus-circle-outline" variant="text" small @click="addUser"></v-btn> -->
      <!-- <v-btn icon small variant="text" @click="openFileInput">
          <v-icon>mdi-microsoft-excel</v-icon>
          <v-file-input
            ref="fileInput"
            style="display: none"
            @change="handleFileChange"
            variant="outlined"
          ></v-file-input>
        </v-btn> -->
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
  <v-card tile elevation="0" v-if="toggleFilter">
    <v-row>
      <v-col cols="12" md="11">
        <v-row color="transparent" class="mt-4">
          <v-col cols="3" :md="3">
            <!-- v-model="searchUser.civility" -->
            <v-text-field
              type="date"
              label="Date"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="3" :md="3" color="transparent">
            <v-text-field
              v-model="searchUser.first_name"
              :label="$t('filterFrom.first name')"
              @keyup="searchData"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="3" :md="3">
            <!-- v-model="searchUser.roleKey" -->
            <v-select
              :items="roles"
              :menu-props="{ maxHeight: '400' }"
              :label="$t('filterFrom.filterSubject')"
              persistent-hint
              @change="searchData()"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-select>
          </v-col>

          <v-col cols="3" :md="3" color="transparent">
            <!-- v-model="searchUser.email" -->
            <v-text-field
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
            @click.stop="clearFilter"
          >
            <!-- {{ $t("btn.clear") }} -->
            clear
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <bread-crumb></bread-crumb>
  <v-card class="mb-4 px-2">
    <custom-title>
      <v-btn variant="text" small icon="mdi-calendar-range"></v-btn>
      <p>Today: {{ today }}</p>
      <template #right>
        <v-btn
        @click="enterSend"
          color="primary"
          variant="text"
          append-icon="mdi-send-check-outline"
        >
          Send
        </v-btn>
      </template>
    </custom-title>
  </v-card>
  <v-data-table
    v-model="selected"
    class="elevation-1"
    :headers="headers"
    :items="filteredUser"
    items-per-page="10"
    item-value="name"
    return-object
    show-select
  >
    <template v-slot:[`item.profile`]="{ item }">
      <v-avatar>
        <v-img :src="item.profile"></v-img>
      </v-avatar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn
        variant="text"
        small
        icon="mdi-eye"
        @click="detail(item.id)"
      ></v-btn>
    </template>
    <template v-slot:[`item.status`]="{ item }">
      <v-select
        style="margin-top: 16px"
        v-model="item.status"
        :items="[
          'Present',
          'Absent',
          'Early',
          'Excused',
          'Unexcused',
          'On leave',
          'No show'
        ]"
        variant="outlined"
        density="compact"
      ></v-select>
    </template>
    <template v-slot:[`item.message`]="{ item }">
      <v-btn
        variant="text"
        small
        icon="mdi-message-alert-outline"
        @click="detail(item.id)"
      ></v-btn>
    </template>
  </v-data-table>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useClassroomStore } from '@/stores/classroom.js'
import { useTelegramBotStore } from '@/stores/telegram-bot.js'

const router = useRouter()
const classroomStore = useClassroomStore()
const telegramStore = useTelegramBotStore()
const toggleFilter = ref(false)
let filteredUser = ref([])
let searchUser = ref([])
let text = ref([])
let chat_id = ref([])

const headers = [
  { title: 'Profile', align: 'center', key: 'image' },
  { title: 'First Name', align: 'center', key: 'first_name' },
  { title: 'Last Name', align: 'center', key: 'last_name' },
  { title: 'Email', align: 'center', key: 'email' },
  // { title: 'Status', align: 'center', key: 'role' },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Message', key: 'message', sortable: false },
  { title: '', key: 'actions', sortable: false }
]
const enterSend = async () => {
  console.log('send message');
  const message = {
    text: text.value,
    chat_id: chat_id.value,
  }
  console.log(telegramStore.sendMessage);
  console.log(message);
  telegramStore.sendMessage(message)
}
const performSearch = async () => {
  filteredUser.value = classroomStore.data.filter((user) => {
    const matchFirstName =
      user?.first_name
        ?.toLowerCase()
        .includes(searchUser.value.first_name.toLowerCase()) || false
    return matchFirstName
  })
}

const classrroomDetails = async (id) => {
  try {
    await classroomStore.getStudentsInClassroom(id)
    const studentsList = classroomStore.studentsInclassroom
    console.log('classroom detail', studentsList)
    // studentsList.forEach((student)=>{
    //   console.log(student);
    // })
    studentsList.forEach((student) => {
      console.log(student.students)
      const array = student.students
      array.forEach((student) => {
        console.log(student)
        filteredUser.value.push({
          profile: student.profile,
          first_name: student.first_name,
          last_name: student.last_name,
          email: student.email,
          role: student.role,
          id: student.id
        })
      })
    })
    // Now you can use studentsList.studentsInclassroom
  } catch (error) {
    console.error('Error fetching classroom details:', error)
  }
}

const searchData = () => {
  performSearch()
}

const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}

const clearFilter = async () => {
  searchUser.value.email = ''
  searchUser.value.first_name = ''
  // await loadData()
}
const currentDate = async () => {
  const current = new Date()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthIndex = current.getMonth()
  const monthName = monthNames[monthIndex]
  const date = `${current.getDate()}/${monthName}/${current.getFullYear()} => ${current.getHours()}h:${current.getMinutes()}mn:${current.getSeconds()}s`
  console.log('date', date)
  return date
}
const today = ref(null)

currentDate().then((date) => {
  today.value = date
})
onMounted(async () => {
  // await loadData()
  const id = router.currentRoute.value.params.id
  console.log(id)
  await classrroomDetails(id)
})
</script>

<style scoped>
.v-data-table-footer {
    background: #dfcece;
  }
  thead {
    background: #d4c0c0;
  }
</style>
