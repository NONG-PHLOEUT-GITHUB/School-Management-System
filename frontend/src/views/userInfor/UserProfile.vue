<template>
  <custom-title icon="mdi-account">
    <span class="d-inline-block capitalize-first-letter">My Profile</span>
  </custom-title>
  <v-container fluid class="pa-0" style="background: #d74a4a;">
    <profile-user />
  </v-container>
</template>

<script>
import ProfileUser from "@/components/user/Profile.vue";
export default {
  name: "UserProfile",

  components: {
    ProfileUser,
  },
};
</script>
