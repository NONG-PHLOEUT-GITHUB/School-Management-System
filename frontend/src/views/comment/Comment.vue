<template>
  <custom-title icon="mdi-lightbulb-on">
    <span class="d-inline-block capitalize-first-letter">My Comment</span>
  </custom-title>

  <comment />
  
</template>
<script setup>
import Comment from "@/components/comments/Comment.vue";

import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();

onMounted(async () => {
  try {
    await authStore.fetchUser();
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>
