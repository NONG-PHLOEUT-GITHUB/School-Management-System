<template>
  <v-container fluid>
    <v-row style="background: #efe8e8;">
      <v-col class="profile-container">
        <v-card class="profile-card">
          <v-img
            class="profile-cover"
            aspect-ratio="0"
            src="https://i.pinimg.com/originals/93/46/b9/9346b9be943e1bae0acd662bba9c5db9.jpg"
          >
            <!-- Camera button for changing cover photo -->
            <v-btn icon class="camera-button">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-img>
          <v-card-text>
            <v-avatar size="150">
              <v-img
                class="profile-avatar"
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
            <div class="user-name text-h4">
              John Doe
            </div>
            <!-- User Information -->
            <v-divider></v-divider>
            <v-row class="user-info">
              <v-col cols="12" md="4">
                <v-icon>mdi-email</v-icon> johndoe@example.com
              </v-col>
              <v-col cols="12" md="4">
                <v-icon>mdi-phone</v-icon> (123) 456-7890
              </v-col>
              <v-col cols="12" md="4">
                <v-icon>mdi-map-marker</v-icon> 123 Main St, City
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.profile-container{
  width: 10%;
}
.profile-card {
  border-radius: 10px;
  margin: 0 auto;
  max-width: 800px;
}

.profile-cover {
  border-radius: 10px 10px 0 0;
}

.profile-avatar {
  border-radius: 10px;
}

.camera-button, .camera-button-profile {
  position: absolute;
  bottom: 15px;
  right: 20px;
  z-index: 2;
}

.user-name {
  text-align: center;
  color: #333;
}

.user-info {
  padding: 16px 0;
  color: #555;
  text-align: center;
}
</style>
