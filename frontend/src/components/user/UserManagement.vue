<template>
  <custom-title icon="mdi-table-large">
    <span class="d-inline-block capitalize-first-letter">User Management</span>
    <template #right>
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
            <!-- v-model="searchUser.name" -->
            <v-text-field
              :label="$t('filterFrom.filterTeacher')"
              @keyup="loadData"
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
              @change="loadData()"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-select>
          </v-col>

          <v-col cols="3" :md="3" color="transparent">
            <!-- v-model="searchUser.email" -->
            <v-text-field
              :label="$t('filterFrom.filterStatuse')"
              @keyup="loadData"
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
    :items="desserts"
    items-per-page="10"
    item-value="name"
    return-object
    show-select
  >
  </v-data-table>
</template>
<script setup>
import { useUsersStore } from '@/stores/users'
import { ref, onMounted } from 'vue'
const usersStore = useUsersStore()
const toggleFilter = ref(false)
const desserts = ref([])
const selected = ref([])

const headers = [
  { title: 'Profile', align: 'center', key: 'profile' },
  { title: 'First Name', align: 'center', key: 'first_name' },
  { title: 'Last Name', align: 'center', key: 'last_name' },
  { title: 'Email', align: 'center', key: 'email' },
  { title: 'Status', align: 'center', key: 'role' },
  { title: '', align: 'center', key: 'iron' },
  { title: '', align: 'center', key: 'Action' }
]

onMounted(async () => {
  try {
    await usersStore.fetchAllUsersData()
    console.log(usersStore.users)
    usersStore.users.data.forEach((user) => {
      desserts.value.push({
        date: user.date,
        profile: user.profile,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        id: user.id
      })
    })
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}
</script>

<style scoped>
.v-data-table-footer {
  background: #dfcece;
}
thead {
  background: #d4c0c0;
}
</style>
