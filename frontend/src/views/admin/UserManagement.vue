<template>
  <custom-title title="User Management"
  icon="mdi-account-multiple"/>
  <user-management/>
  <menu-list></menu-list>
  <!-- <AppMenuSidebar></AppMenuSidebar> -->
</template>

<script>
import CustomTitle from '@/components/common/CustomTitle.vue';
import UserManagement from '@/components/user/UserManagement.vue';
import MenuList from '@/components/menus/menuItems/MenuList.vue';
// import AppMenuSidebar from '@/components/menus/AppMenuSidebar.vue';
export default {
  name: "AdminDashboard",

  components:{
    CustomTitle,
    UserManagement,
    MenuList,
    // AppMenuSidebar
  }
};
</script>

<style scoped>

</style>
