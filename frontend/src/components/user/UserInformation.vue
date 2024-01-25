<template>
  <v-card class="mt-1 px-2">
    <v-row class="mt-2">
      <v-col v-for="property in userProperties" :key="property.key" cols="4">
        <v-text-field
          v-model="property.value"
          variant="outlined"
          readonly
          :prepend-inner-icon="property.icon"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
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
    icon: 'mdi-gender-male-female',
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
    icon: 'mdi-face-agent',
    value: authStore.user?.data?.age
  }
])

onMounted(async () => {
  try {
    await authStore.fetchUser()
    console.log(authStore.user)
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>
