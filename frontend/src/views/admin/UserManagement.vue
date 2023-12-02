<template>
  <custom-title icon="mdi-account-multiple">
    <span class="d-inline-block capitalize-first-letter">User Management</span>
  </custom-title>
  <user-management />
</template>

<script>
import UserManagement from "@/components/user/UserManagement.vue";

export default {
  name: "AdminDashboard",

  components: {
    UserManagement,
  },
};
</script>

<style scoped></style>
