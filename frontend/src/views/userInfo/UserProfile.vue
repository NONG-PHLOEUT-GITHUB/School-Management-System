<template>
  <custom-title icon="mdi-account">
    <span class="d-inline-block capitalize-first-letter">My Profile</span>
  </custom-title>
  <profile-user />
  <!-- <v-container fluid class="pa-0" style="background: #d74a4a;">
  </v-container> -->
</template>

<script>
import ProfileUser from "@/components/user/LayoutUserProfile.vue";
export default {
  name: "UserProfile",

  components: {
    ProfileUser,
  },
};
</script>
