<template>
    <v-container fluid style="background: red" class="pa-1">
      <v-img
        width="100%"
        aspect-ratio="3.9"
        cover
        src="../../../public/assets/images/jsconfig.jpeg"
      >
        <!-- Camera button for changing cover photo -->
        <v-btn icon class="camera-button">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </v-img>
      <div class="profile-avatar">
        <v-avatar color="grey" size="300" rounded="10">
          <v-img
            cover
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          >
            <!-- Camera button for changing profile photo -->
            <v-btn icon class="camera-button-profile">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-img>
        </v-avatar>
        <!-- User Name -->
        <div class="user-name">
          <h2>John Doe</h2>
        </div>
      </div>
    </v-container>
  </template>
  
  <style scoped>
  .profile-avatar {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: solid 3px white;
    border-radius: 100%;
  }
  
  .camera-button, .camera-button-profile {
    position: absolute;
    bottom: 35px;
    right: 50px;
    z-index: 2;
  }
  
  .user-name {
    /* background: #000; */
    width: 90%;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: rgb(150, 30, 30);
    font-size: 24px;
  }
  </style>
  