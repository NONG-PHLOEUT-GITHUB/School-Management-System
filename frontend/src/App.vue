<template>
  <v-app>
    <LaunchApp ref="overlay"/>
    <router-view />
    <!-- <AlertNotification :value="toastNotifications"/> -->
    <Notif ref="notif" dismissible :default-timeout="7000"/>
    <LogoutConfirmation ef="notif"  @logoutconfirmation="handleCreateToast"/>
  </v-app>
</template>

<script>
import LaunchApp from "./components/common/components/LaunchApp.vue";
// import AlertNotification from "./components/common/AlertNotification.vue";
import Notif from "./components/common/components/Notification.vue";
import LogoutConfirmation from "./components/common/LogoutConfirmation.vue"

export default {
  name: "App",
  components: {
    LaunchApp,
    Notif,
    LogoutConfirmation,
  },
  data() {
    return {
      toastNotifications: [],
    };
  },
  mounted() {
    this.$root.$notif = this.$refs.notif.newAlert
  },
  methods: {
    handleCreateToastFromConfirmation() {
      this.$refs.alertNotification.createToast('success');
    },
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
  /* background: red; */
  font-family: "Poppins", sans-serif;
}
</style>
