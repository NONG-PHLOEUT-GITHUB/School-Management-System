<template>
  <sidebar :menubar="menubar"></sidebar>
</template>

<script>
export default {
  data: () => ({
    menubar: [
      {
        path: "/dashboard/user",
        name: "dashboard",
        icon: "mdi-home",
      },
    //   {
    //     path: "/student-attendance",
    //     title: "Attendance",
    //     icon: "mdi-progress-check",
    //   },
    //   {
    //     path: "/student-scores",
    //     title: "Score",
    //     icon: "mdi-chart-bar",
    //   },
    //   {
    //     path: "/student-comments",
    //     title: "Comment",
    //     icon: " mdi-comment",
    //   },
    ],
  }),
};
</script>
