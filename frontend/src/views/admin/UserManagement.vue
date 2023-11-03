<template>
  <custom-title icon="mdi-account-multiple">
    <span class="d-inline-block capitalize-first-letter">User Management</span>
  </custom-title>
  <user-management />
</template>

<script>
import CustomTitle from "@/components/common/CustomTitle.vue";
import UserManagement from "@/components/user/UserManagement.vue";

export default {
  name: "AdminDashboard",

  components: {
    CustomTitle,
    UserManagement,
  },
};
</script>

<style scoped></style>
