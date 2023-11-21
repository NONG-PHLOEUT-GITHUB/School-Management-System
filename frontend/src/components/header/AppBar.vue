<template>
  <LogoutConfirmation @logout="logoutUser" ref="logoutDialog" />
  <v-dialog
    v-model="dialogVisible"
    transition="dialog-top-transition"
    width="auto"
  >
    <!-- @password-changed="dialogVisible = false" -->
    <change-password-dailog @cancel="dialogVisible = false" />
  </v-dialog>
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
      <Notification />
    </v-app-bar-nav-icon>

    <!-- logged in user menu -->
    <div>
      <v-list-item class="px-2">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ props }">
            <!-- <v-title class="me-8">Nong Phloeut</v-title> -->
            <v-btn icon v-bind="props" class="me-5">
              <v-avatar color="" size="large">
                <v-img src="../../assets/images/avatar1.png" alt="Avatar" cover>
                </v-img>
              </v-avatar>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <div class="profile">
                <v-avatar color="" size="large">
                  <v-img
                    src="../../assets/images/avatar1.png"
                    alt="Avatar"
                    cover
                  >
                  </v-img>
                </v-avatar>
                <div
                  class="subtitle"
                  v-for="(value, key) in authStore.user"
                  :key="key"
                >
                  <span class="font-weight-black">
                    {{ value.first_name }}
                    {{ value.last_name }}
                  </span>
                  <br />
                  <span class="email">{{ value.email }}</span>
                </div>
              </div>
            </v-list-item>

            <v-col cols="auto">
              <v-btn
                size="small"
                block
                variant="outlined"
                color="primary"
                :to="{ name: 'profile-user' }"
                >{{ $t("common.viewProfile") }}</v-btn
              >
            </v-col>
            <v-divider></v-divider>
            <v-list-item
              v-for="(item, i) in menus"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon
                  size="large"
                  class="icon-setting"
                  :icon="item.icon"
                ></v-icon>
                <v-list-item-title
                  v-text="item.title"
                  :to="item.path"
                  @click="onMenuClick(item.action)"
                ></v-list-item-title>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </div>
  </v-app-bar>
</template>

<script>
import Language from "../common/SwitcherLanguage.vue";
// import LogoutConfirmation from "../common/LogoutConfirmation.vue";
import Notification from "../common/components/Notification1.vue";
import ChangePasswordDailog from "@/views/auth/ChangePassword.vue";
import { useAuthStore } from "@/stores/auth.js";
// import { useRouter } from 'vue-router';

export default {
  name:"AppBar",
  props: {
    width: { type: [Number, String] },
  },
  components: {
    Language,
    // LogoutConfirmation,
    Notification,
    ChangePasswordDailog,
  },
  data() {
    return {
      drawer: false,
      tooltipVisible: false,
      dialogVisible: false,
      menus: [
        {
          title: this.$t("header.menuChangePass"),
          action: "changePassword",
          icon: "mdi-lock-reset",
        },
        {
          title: this.$t("header.menuLogout"),
          icon: "mdi-logout",
          action: "logout",
        },
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
    // async chnagePassword (){
    //   console.log(this.dialogVisible);
    //   this.dialogVisible = true
    // },
    async logoutUser() {
      const authStore = useAuthStore();
      await authStore.logout();
      this.$router.push({ name: "login" });
      console.log("Logout confirmed");
    },
    onMenuClick(action) {
      switch (action) {
        case "logout":
          this.logoutUser();
          break;
        case "changePassword":
          this.dialogVisible = true;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<script setup>
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(async () => {
  try {
    await authStore.fetchUser();
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>

<style scoped>
.switcher {
  margin-right: 50px;
}
.icon-setting {
  margin-right: 10px;
  margin-bottom: 3px;
}
.profile {
  display: flex;
}
.subtitle {
  margin-left: 9px;
}
.email {
  display: inline-block;
  max-width: 150px; /* Adjust the max width as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
