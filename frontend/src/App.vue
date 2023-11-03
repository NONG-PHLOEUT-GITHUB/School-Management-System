<template>
  <v-app>
    <LaunchApp />
    <router-view />
    <!-- <AlertNotification :value="toastNotifications"/> -->
  </v-app>
</template>

<script>
import LaunchApp from "./components/common/components/LaunchApp.vue";
// import AlertNotification from "./components/common/AlertNotification.vue";
export default {
  name: "App",
  components: {
    LaunchApp,
    // AlertNotification
  },
  data() {
    return {
      toastNotifications: [],
    };
  },
};
</script>

<!-- <style lang="scss" src="./sass/app.scss">
  
</style> -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

body{
  background: red;
  font-family: "Poppins", sans-serif;
}
</style>
