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
            value: "studentDashboard",
            to: { name: "studentDashboard" },
          },
          {
            icon: "mdi-trending-up",
            title: "menu.myGrades",
            value: "myScore",
            to: { name: "myScore" },
          },
          {
            icon: "mdi-clock-in",
            title: "menu.myAttendance",
            value: "myAttendance",
            to: { name: "myAttendance" },
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
