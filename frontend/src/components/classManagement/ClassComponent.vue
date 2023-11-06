<template>
  {{ usersStore }}
  hello
</template>

<script setup>
import { onMounted } from 'vue';
import {useUsersStore} from '@/stores/users.js';

const usersStore = useUsersStore();

onMounted(async () => {
  try {
    await usersStore.fetchAllUsersData();
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>
