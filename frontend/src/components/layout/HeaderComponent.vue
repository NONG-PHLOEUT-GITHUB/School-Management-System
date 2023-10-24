<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer">
          <router-link to="/about">Forgot login password?</router-link>
          <router-link to="/home">Forgot login password?</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="School management">
      <v-badge content="2" color="error" class="me-10">
        <v-icon class="cursor-pointer">mdi-bell-outline</v-icon>
      </v-badge>
      <!-- <template v-slot:prepend>
        <v-icon icon="mdi-menu" @click.stop="drawer = !drawer"></v-icon>
      </template> -->
      <v-app-bar-nav-icon @click="togglerDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ props }">
          <v-title class="me-8">Nong Phloeut</v-title>
          <v-btn icon v-bind="props" class="me-5">
            <v-avatar color="" size="large">
              <v-img src="../../assets/images/profile.png" alt="Avatar" cover>
              </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            prepend-avatar="https://t3.ftcdn.net/jpg/02/30/60/82/360_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.webp"
            title="John Leider"
            subtitle="john@google.com"
          >
          </v-list-item>

          <v-col cols="auto">
            <v-btn size="small" block variant="outlined">View Profile</v-btn>
          </v-col>

          <v-divider></v-divider>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main ref="vMain">
      <v-container class="px-6" fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { text: "My Files", icon: "mdi-account-settings" },
        { text: "Logout", icon: "mdi-logout" },
      ],
    };
  },
  methods:{
    togglerDrawer() {
      this.$emit('toggle')
    },
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
