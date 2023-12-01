<template>
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.value"
        :prepend-icon="item.icon"
        :title="$t(item.title)"
        :value="item.value"
        :to="item.to"
      ></v-list-item>
    </v-list>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            icon: "mdi-widgets",
            title: "menu.dashboard",
            value: "home",
            to: { name: "dashboard" },
          },
          {
            icon: "mdi-trending-up",
            title: "menu.myGrades",
            value: "account",
            to: { name: "user-management" },
          },
          {
            icon: "mdi-clock-in",
            title: "menu.myAttendance",
            value: "account",
            to: { name: "user-management" },
          },
          {
            icon: "mdi-comment",
            title: "menu.myComment",
            value: "comment",
            to: { name: "CommentStudent" },
          },
        ],
      };
    },
  };
  </script>
