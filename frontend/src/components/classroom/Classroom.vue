<template>
  <!-- <v-btn>Create Class</v-btn> -->
  <custom-title icon="mdi-table-large">
    <span class="d-inline-block capitalize-first-letter">Class Management</span>
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
          <v-col cols="3" :md="4" color="transparent">
            <!-- v-model="searchUser.name" -->
            <v-text-field
              :label="$t('filterFrom.filterTeacher')"
              @keyup="loadData"
              variant="outlined"
              dense
              persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="3" :md="4">
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

          <v-col cols="3" :md="4" color="transparent">
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
  <v-container fluid class="pa-2">
    <v-row>
      <!--sm Display 2 cards per row on small screens -->
      <!--md Display 3 cards per row on medium screens -->
      <!--lg Display 4 cards per row on large screens -->
      <v-col
        class="pa-1"
        sm="6"
        md="4"
        lg="2"
        v-for="(classroom, index) in classroomStore.classrooms.data"
        :key="index"
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
import { ref, onMounted } from 'vue'
import { useClassroomStore } from '@/stores/classroom.js'

const items = [{ title: 'Edit' }, { title: 'Delete' }]
const toggleFilter = ref(false)
const classroomStore = useClassroomStore()

const deleteClassroom = async (ID) => {
  try {
    await classroomStore.deleteClassroomByID(ID)
    await classroomStore.fetchAllClassrooms()
  } catch (error) {
    console.error('Error deleting classroom:', error)
  }
}

onMounted(async () => {
  try {
    await classroomStore.fetchAllClassrooms()
  } catch (error) {
    console.error('Error fetching total students or teachers:', error)
  }
})
const updateToggle = async () => {
  toggleFilter.value = !toggleFilter.value
}
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
