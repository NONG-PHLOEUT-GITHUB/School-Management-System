<template>
  <bread-crumb :path-titles="pathTitle" />
  <custom-title right-icon="mdi-information-outline">
    <v-btn small icon class="white mr-2" @click="goBack" variant="text">
      <v-icon small> mdi-arrow-left </v-icon>
    </v-btn>
    <span class="d-inline-block capitalize-first-letter">{{
      pageSubTitle
    }}</span>
  </custom-title>
  <v-card class="mt-1">
    <v-row class="mt-2">
      <v-col cols="4">
        <v-text-field
          v-model="classroomName"
          variant="outlined"
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="classroomName"
          variant="outlined"
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="4">
      <v-select
        clearable
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming'
        ]"
        variant="outlined"
      ></v-select>
    </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const pageTitle = ref('')
const pageSubTitle = ref('')
const pathTitle = ref([])
const authStore = useAuthStore()

const generatePageTitle = async () =>
  `Gestion des ${this.$t('menu.parametersMenu.users')}`
const generatePageSubTitle = async () =>
  this.isCreate
    ? this.$t('userForm.createUser')
    : this.isViewForm
      ? this.$t('userForm.viewUser')
      : this.$t('userForm.editUser')

const generatePathTitle = async () => [
  {
    text: await generatePageTitle(),
    to: { name: 'Users' },
    exact: true
  },
  {
    text: await generatePageSubTitle()
  }
]
onMounted(async () => {
  try {
    await authStore.fetchUser()
    pageTitle.value = await generatePageTitle()
    pageSubTitle.value = await generatePageSubTitle()
    pathTitle.value = await generatePathTitle()
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>
