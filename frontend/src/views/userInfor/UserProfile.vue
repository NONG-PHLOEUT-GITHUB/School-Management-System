<template>
  <v-container fluid class="pa-0" style="background: #d74a4a;">
    <custom-title title="My Profile" icon="mdi-account-circle" />
    <profile-user />
  </v-container>
</template>

<script>
import CustomTitle from "@/components/common/CustomTitle.vue";
import ProfileUser from "@/components/user/Profile.vue";
export default {
  name: "UserProfile",

  components: {
    CustomTitle,
    ProfileUser,
  },
};
</script>
