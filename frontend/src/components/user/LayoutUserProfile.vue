<template>
  <v-card variant="tonal">
    <v-img
      elevation-5
      class="profile-cover"
      aspect-ratio="0"
      src="../../../public/assets/images/cover.jpg"
      cover
    >
      <v-btn icon class="camera-button">
        <v-icon>mdi-camera</v-icon>
      </v-btn>
    </v-img>
    <v-card-text>
      <div class="user-infor">
        <div class="user-name text-h4">{{ email }}</div>
        <div>
          <v-list class="user-menu">
            <card
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
            >
              <v-btn
                v-text="item.text"
                :to="{ name: item.path }"
                variant="outlined"
                class="ms-2"
              ></v-btn>
            </card>
          </v-list>
        </div>
      </div>
      <v-avatar size="200" class="profile-avatar">
        <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
          <v-btn icon class="camera-button-profile">
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </v-img>
      </v-avatar>
    </v-card-text>
  </v-card>
  <v-container class="px-0" fluid>
    <router-view />
  </v-container>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    }
  },
}
</script>

<script setup>
  const items = [
    { path: "AboutMe", text: "About me", icon: "mdi-clock" },
    { path: "profileCommentRecord", text: "My comment", icon: "mdi-account" },
    { text: "Conversions", icon: "mdi-flag" },
  ];
</script>
<style scoped>
.user-menu {
  display: flex;
}
.profile-cover {
  border-radius: 10px 10px 0 0;
  height: 300px;
}

.profile-avatar {
  position: absolute;
  bottom: 5px;
  left: 35px;
  z-index: 1;
  border: 5px solid rgb(149, 165, 119);
  border-radius: 100px;
}

.camera-button,
.camera-button-profile {
  position: absolute;
  bottom: 25px;
  right: 20px;
  z-index: 2;
}

.user-name {
  /* background: red; */
  text-align: start;
  width: 43%;
  color: #333;
}
.user-infor {
  display: flex;
  justify-content: flex-end;
  /* background: green; */
}
</style>
