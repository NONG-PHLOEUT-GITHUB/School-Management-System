<template>
  <v-layout class="rounded rounded-md">
    <!-- sidebar -->
    <sidebar-component v-model="drawer"></sidebar-component>
    <!-- app bar -->
    <app-bar :width="appBarWidth" @toggle="toggleNav"></app-bar>

    <!-- main body -->
    <v-main ref="vMain">
      <v-container class="px-6" fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import AppBar from "../header/AppBar.vue";
export default {
 name: "layout-component",
  components: {SidebarComponent ,AppBar},
  data() {
    return {
      drawer: true,
      appBarWidth: '100%',
    };
  },
  methods: {
    toggleNav() {
      this.drawer = !this.drawer
    },
    resizeWidth(width) {
      this.appBarWidth = width
      this.$vuetify.application.left = width.slice(0, -2)
      this.$refs.vMain.$el.style.userSelect = 'none'
    },
  },
};
</script>

<style scoped>
::v-main{
  background: #a74242;
}
</style>
