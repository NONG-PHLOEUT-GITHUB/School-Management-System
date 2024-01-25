<template>
  <v-app>
    <LaunchApp ref="overlay" />
    <router-view />
    <!-- <AlertNotification ref="alert" /> -->
    <Notif ref="notif" dismissible :default-timeout="2000" />
    <LogoutConfirmation ref="logutconfirm" />
    <Confrim ref="confirm" />
  </v-app>
</template>

<script setup>
import LaunchApp from './components/global/LaunchApp.vue'
// import AlertNotification from './components/global/AlertNotification.vue'
import Notif from './components/common/Notification.vue'
import LogoutConfirmation from './components/global/LogoutConfirmation.vue'
import Confrim from './components/global/Confrim.vue'

import { ref, onMounted, getCurrentInstance } from 'vue'
const notif = ref(null)
const confirm = ref(null)
const logutconfirm = ref(null)
const app = getCurrentInstance()

onMounted(async () => {
  // console.log('notfigation',notif.value.newAlert);
  // console.log('notfigation open',confirm.value);
  // console.log('notfigation open',logutconfirm.value.open);
  app.appContext.config.globalProperties.$notif = notif.value.newAlert
  app.appContext.config.globalProperties.$confirm = confirm.value.open;
  app.appContext.config.globalProperties.$logutconfirm = logutconfirm.value.open;
})
</script>

<!-- <style lang="scss" src="./sass/app.scss">
  
</style> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  font-family: 'Poppins', sans-serif;
}

body {
  /* background: red; */
  font-family: 'Poppins', sans-serif;
}
</style>
