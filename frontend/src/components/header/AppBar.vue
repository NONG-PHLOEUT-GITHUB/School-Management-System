<template>
  <v-app-bar ref="appBar" app color="white">
    <v-app-bar-nav-icon @click="togglerDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <!-- switch language -->
    <div class="switcher">
      <Language></Language>
    </div>

    <!-- notification magnify-->
    <v-app-bar-nav-icon class="me-10">
      <v-badge content="2" color="error">
        <v-icon class="cursor-pointer">mdi-bell-outline</v-icon>
      </v-badge>
    </v-app-bar-nav-icon>

    <!-- logged in user menu -->
    <div>
      <v-list-item class="px-2">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ props }">
            <!-- <v-title class="me-8">Nong Phloeut</v-title> -->
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
              v-for="(item, i) in menus"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
              <!-- <v-list-item-title v-text="item.text"></v-list-item-title> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </div>
  </v-app-bar>
</template>

<script>

import Language from '../common/SwitcherLanguage.vue';
export default {
  props: {
    width: { type: [Number, String] },
  },
  components:{
    Language
  },
  data() {
    return {
      drawer: false,
      tooltipVisible: false,
      menus: [
        { text: "Change password", icon: "mdi-lock-reset" },
        { text: "Logout", icon: "mdi-logout" },
      ],
    };
  },
  watch: {
    width(newVal) {
      const resizedWidth = newVal.slice(0, -2);
      const ele = this.$refs.appBar.$el;
      ele.style.left = resizedWidth + "px";
      ele.style.transition = "0s";
      ele.style.userSelect = "none";
    },
  },
  methods: {
    togglerDrawer() {
      this.$emit("toggle");
    },
    toggleTooltip() {
      this.tooltipVisible = !this.tooltipVisible;
    },
  },
};
</script>

<style scoped>

.switcher{
  margin-right: 50px;
}
</style>
