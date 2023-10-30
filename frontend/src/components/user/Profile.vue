<template>
  <v-container fluid>
    <v-row class="pa-0">
      <v-col class="profile-container" cols="7">
        <v-card class="profile-card">
          <v-img 
           elevation-5
            class="profile-cover"
            aspect-ratio="0"
            src="https://i.pinimg.com/originals/93/46/b9/9346b9be943e1bae0acd662bba9c5db9.jpg"
            cover
          >
            <!-- Camera button for changing cover photo -->
            <v-btn icon class="camera-button">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-img>
          <v-card-text>
            <!-- User Name -->
            <div class="user-name text-h4">John Doe</div>
            <v-avatar size="200" class="profile-avatar">
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
            <!-- User Information -->
            <div class="user-information">
              <v-divider></v-divider>
              <v-row class="user-info">
                <v-col cols="12" md="4">
                  <v-icon>mdi-email</v-icon>
                  <div class="ellipsis-text" title="johndoe@example.com">
                    johndoe@example.com
                  </div>
                </v-col>

                <v-col cols="12" md="4">
                  <v-icon>mdi-phone</v-icon> (123) 456-7890
                </v-col>
                <v-col cols="12" md="4">
                  <v-icon>mdi-map-marker</v-icon> 123 Main St, City
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="user-info">
                <v-col cols="12" md="4">
                  <v-icon>mdi-email</v-icon> johndoe@example
                </v-col>
                <v-col cols="12" md="4">
                  <v-icon>mdi-phone</v-icon> (123) 456-7890
                </v-col>
                <v-col cols="12" md="4">
                  <v-icon>mdi-map-marker</v-icon> 123 Main St, City
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <pie-charts />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PieCharts from "@/components/dashboard/PieCharts.vue";
export default {
  components: {
    PieCharts,
  },
};
</script>

<style scoped>
.profile-container {
  width: 100%;
}

.profile-card {
  border-radius: 10px;
  margin: 0 auto;
  max-width: 800px;
  position: relative;
}

.profile-cover {
  border-radius: 10px 10px 0 0;
  height: 300px; /* Adjust the height as needed */
}

.profile-avatar {
  position: absolute;
  bottom: 300px; /* Adjust the distance from the bottom as needed */
  left: 35px; /* Adjust the distance from the left as needed */
  z-index: 1;
  border: 4px solid rgb(235, 241, 236);
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
  text-align: center;
  color: #333;
}

.user-info {
  padding: 16px 0;
  color: #555;
  text-align: center;
}
.user-information {
  /* background: #000; */
  margin-top: 30px;
  padding: 70px;
}
</style>
