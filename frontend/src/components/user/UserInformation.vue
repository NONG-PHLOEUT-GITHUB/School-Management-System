<template>
  <!-- <LayoutUserProfile :email="userProperties.find(property => property.key === 'email').value"></LayoutUserProfile> -->
  <v-card class="mt-1">
    <v-row class="mt-2">
      <v-col v-for="property in userProperties" :key="property.key" cols="4">
        <v-icon>{{ property.icon }}</v-icon> {{ property.label }}
        <v-text-field
          v-model="property.value"
          variant="outlined"
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
// import LayoutUserProfile from './LayoutUserProfile.vue';

import { onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const userProperties = computed(() => [
  {
    key: 'email',
    label: 'Email',
    icon: 'mdi-email',
    value: authStore.user?.data?.email
  },
  {
    key: 'address',
    label: 'Address',
    icon: 'mdi-map-marker',
    value: authStore.user?.data?.address
  },
  {
    key: 'gender',
    label: 'Gender',
    icon: 'mdi-cake-variant',
    value: authStore.user?.data?.gender
  },
  {
    key: 'phone_number',
    label: 'Phone number',
    icon: 'mdi-phone',
    value: authStore.user?.data?.phone_number
  },
  {
    key: 'date_of_birth',
    label: 'Date of birth',
    icon: 'mdi-cake-variant',
    value: authStore.user?.data?.date_of_birth
  },
  {
    key: 'age',
    label: 'Age',
    icon: 'mdi-cake-variant',
    value: authStore.user?.data?.age
  }
])

onMounted(async () => {
  try {
    await authStore.fetchUser()
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>
