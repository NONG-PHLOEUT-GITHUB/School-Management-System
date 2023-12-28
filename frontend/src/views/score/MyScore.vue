<template>
  <custom-title icon="mdi-table-large">
    <span class="d-inline-block capitalize-first-letter"> My Attendance </span>
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
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :v-model:returnValue="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
                @change="menu = false"
              ></v-date-picker>
            </v-menu>
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
  >
  </v-data-table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
const desserts = ref([
  {
    score: '76',
    suject: 'Khmer',
    grade: 'A',
    status: 'Pass'
  }
])
const toggleFilter = ref(false)
const menu = ref(false)
const date = new Date()
const headers = [
  { title: 'Suject', align: 'center', key: 'suject' },
  { title: 'Score', align: 'center', key: 'score' },
  { title: 'Grade', align: 'center', key: 'grade' },
  { title: 'Status', align: 'center', key: 'status' }
]
const authStore = useAuthStore()

onMounted(async () => {
  try {
    await authStore.fetchUser()
    // authStore.user.data.attendances.forEach((attendance) => {
    // desserts.value.push({
    //   date: attendance.date,
    //   reason: attendance.reason,
    //   status: attendance.status,
    //   id: attendance.id,
    // });
    // });
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}
</script>

<script>
export default {
  data() {
    return {
      datePickerOpenBook: false,
      formData: {
        dateEffetOpenBook: new Date() // or initialize with your desired default date
      }
    }
  }
  // computed: {
  //   computedDateOpenBookFormatted() {
  //     // Implement the formatting logic for your date
  //     return this.$date(this.formData.dateEffetOpenBook).format('yyyy-MM-dd')
  //   }
  // }
}
</script>
<style>
.v-data-table-footer {
  background: #ebe6e6;
}
thead {
  background: #ebe6e6;
}
</style>
