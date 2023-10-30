<template>
  <v-app>
    <LaunchApp />
    <router-view />
  </v-app>
</template>

<script>
import LaunchApp from "./components/common/components/LaunchApp.vue";
export default {
  name: "App",
  components: {
    LaunchApp,
  },
};
</script>

<style lang="scss" src="./sass/app.scss"></style>

