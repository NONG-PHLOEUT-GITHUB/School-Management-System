<template>
  <custom-title title="User Management"
  icon="mdi-account-multiple"/>
  <user-management/>
</template>

<script>
import CustomTitle from '@/components/common/CustomTitle.vue';
import UserManagement from '@/components/user/UserManagement.vue';
export default {
  name: "AdminDashboard",

  components:{
    CustomTitle,
    UserManagement
  }
};
</script>

<style scoped>

</style>
