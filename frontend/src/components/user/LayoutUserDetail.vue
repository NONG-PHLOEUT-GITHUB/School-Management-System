<template>
  <custom-title icon="mdi-account">
    <span class="d-inline-block capitalize-first-letter"
      >Student<v-icon>mdi-arrow-right</v-icon> Kukasa tharo
      <v-avatar size="50" class="profile-avatar">
        <v-img cover src="../../../public/assets/images/avatar1.png"> </v-img>
      </v-avatar>
    </span>
    <template #right>
      <v-btn
        v-if="hasDetailsMenuItem"
        class="mr-2"
        small
        elevation="0"
        @click="addClassroom"
        icon="mdi-pencil"
      ></v-btn>
      <v-btn small icon class="white" variant="text">
        <v-icon small> mdi-information-outline </v-icon>
      </v-btn>
    </template>
  </custom-title>
  <v-card variant="flat" class="menu py-3">
    <v-list-item
      v-for="item in menus"
      :key="item.value"
      :prepend-icon="item.icon"
      :title="$t(item.title)"
      :value="item.value"
      :to="{ name: item.path }"
      variant="outlined"
      rounded="0"
    ></v-list-item>
  </v-card>
  <v-container fluid class="pa-0">
    <router-view />
  </v-container>
</template>
<script setup>
import {ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const menus = [
  {
    path: 'UserDetail',
    title: 'About',
    icon: 'mdi-clock',
    value: 'details'
  },
  {
    path: 'profileComment',
    title: 'Class record',
    icon: 'mdi-account',
    value: 'comment'
  },
  {
    path: 'detailAcademic',
    title: 'Acadmic record',
    icon: 'mdi-flag',
    value: 'acadmic'
  },
  {
    path: 'detailAttendance',
    title: 'Attendance record',
    icon: 'mdi-flag',
    value: 'attendance'
  }
]
const route = useRoute();
const hasDetailsMenuItem = ref(false);

const updateHasDetailsMenuItem = () => {
  hasDetailsMenuItem.value = menus.some((menu) => menu.value === 'details');
};
watch(() => route.fullPath, updateHasDetailsMenuItem, { immediate: true });


</script>
<style scoped>
.menu {
  display: flex;
}
</style>
