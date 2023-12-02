<template>
  <v-app>
    <LaunchApp ref="overlay"/>
    <router-view />
    <AlertNotification ref="alert"/>
    <Notif ref="notif" dismissible :default-timeout="7000"/>
    <LogoutConfirmation ref="notif"/>
  </v-app>
</template>

<script setup>
import LaunchApp from "./components/global/LaunchApp.vue";
import AlertNotification from "./components/global/AlertNotification.vue";
import Notif from "./components/common/components/Notification.vue";
import LogoutConfirmation from "./components/global/LogoutConfirmation.vue"


</script>

<!-- <style lang="scss" src="./sass/app.scss">
  
</style> -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

body{
  /* background: red; */
  font-family: "Poppins", sans-serif;
}
</style>
