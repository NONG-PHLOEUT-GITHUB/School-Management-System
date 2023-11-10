<template>
  <custom-title icon="mdi-account">
    <span class="d-inline-block capitalize-first-letter"
      >Student<v-icon>mdi-arrow-right</v-icon> Kukasa tharo
      <v-avatar size="50" class="profile-avatar">
        <v-img cover src="../../../public/assets/images/avatar1.png"> </v-img>
      </v-avatar>
    </span>
  </custom-title>
  <v-card variant="flat" class="menu py-3">
    <v-list v-for="(menu, i) in menus" :key="i" :value="menu">
      <v-btn
        v-text="menu.title"
        :to="{ name: menu.path }"
        variant="outlined"
        rounded="0"
      ></v-btn>
    </v-list>
  </v-card>
  <v-container fluid class="pa-0">
    <router-view />
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { path: "UserDetail", title: "About", icon: "mdi-clock" },
        { path: "profileComment", title: "Class record", icon: "mdi-account" },
        { path: "detailAcademic",title: "Acadmic record", icon: "mdi-flag" },
        { path: 'detailAttendance',title: "Attendance record", icon: "mdi-flag" },
      ],
    };
  },
};
</script>
<style scoped>
.menu {
  display: flex;
}
</style>
