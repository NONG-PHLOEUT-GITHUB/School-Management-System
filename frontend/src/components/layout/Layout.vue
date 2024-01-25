<template>
  <v-layout class="rounded rounded-md">
    <!-- sidebar -->
    <sidebar v-model="drawer"></sidebar>
    <!-- app bar -->
    <app-bar :width="appBarWidth" @toggle="toggleNav"></app-bar>

    <!-- main body -->
    <v-main ref="vMain">
      <v-container class="v-container px-6" fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import Sidebar from './Sidebar.vue'
import AppBar from '../header/AppBar.vue'
export default {
  name: 'layout-component',
  components: { Sidebar, AppBar },
  data() {
    return {
      drawer: true,
      appBarWidth: '100%'
    }
  },
  methods: {
    toggleNav() {
      this.drawer = !this.drawer
    },
    resizeWidth(width) {
      this.appBarWidth = width
      this.$vuetify.application.left = width.slice(0, -2)
      this.$refs.vMain.$el.style.userSelect = 'none'
    }
  }
}
</script>

<style scoped>
.v-container{
  background-color: #ECEFF1;
  height: 100%;
}
</style>
