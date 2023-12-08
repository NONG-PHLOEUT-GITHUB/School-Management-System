<template>
  <custom-title icon="mdi-table-large">
    <span class="d-inline-block capitalize-first-letter">User Management</span>
    <template #right>
      <v-btn icon="mdi-plus" variant="text" small></v-btn>
      <v-btn icon small variant="text" @click="openFileInput">
        <v-icon>mdi-microsoft-excel</v-icon>
        <v-file-input
          ref="fileInput"
          style="display: none"
          @change="handleFileChange"
          variant="outlined"
        ></v-file-input>
      </v-btn>
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
    <template v-slot:item.image="{ item }">
      <v-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn variant="text" small icon="mdi-eye" @click="detail(item.id)"></v-btn>
      <v-btn variant="text" small icon="mdi-pencil" color="primary"></v-btn>
      <v-btn variant="text" small icon="mdi-delete" color="red"></v-btn>
    </template>
  </v-data-table>
</template>
<script setup>
import { useUsersStore } from '@/stores/users'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usersStore = useUsersStore()
const toggleFilter = ref(false)
const selected = ref([])
const searchUser = ref({ email: '', first_name: '' })
let filteredUser = ref([])

const headers = [
  { title: 'Profile', align: 'center', key: 'image' },
  { title: 'First Name', align: 'center', key: 'first_name' },
  { title: 'Last Name', align: 'center', key: 'last_name' },
  { title: 'Email', align: 'center', key: 'email' },
  { title: 'Status', align: 'center', key: 'role' },
  { title: '', key: 'actions', sortable: false }
]

const loadData = async () => {
  await usersStore.fetchAllUsersData()
  usersStore.users.data.forEach((user) => {
    filteredUser.value.push({
      date: user.date,
      profile: user.profile,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
      id: user.id
    })
  })
}

const performSearch = async () => {
  filteredUser.value = usersStore.users.data.filter((user) => {
    const matchFirstName =
      user?.first_name
        ?.toLowerCase()
        .includes(searchUser.value.first_name.toLowerCase()) || false
    return matchFirstName
  })
}

// Method to handle the search
const searchData = () => {
  performSearch()
}

const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}

const clearFilter = async () => {
  searchUser.value.email = ''
  searchUser.value.first_name = ''
  await loadData()
}

const fileInputRef = ref(null)

const openFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  // Handle the selected file, e.g., read its content or perform other operations
  console.log('Selected file:', file)
  // Reset the file input after selection
  resetFileInput()
}

const resetFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.value = '' // Reset the input value to allow selecting the same file again
  }
}

const detail = async (id) => {
  console.log('user id',id);
  await router.push({name:'UserDetail'})
}

onMounted(async () => {
  await loadData()
  await performSearch()
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
