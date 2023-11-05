<template>
  <v-card variant="tonal">
    <v-img
      elevation-5
      class="profile-cover"
      aspect-ratio="0"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      cover
    >
      <v-btn icon class="camera-button">
        <v-icon>mdi-camera</v-icon>
      </v-btn>
    </v-img>

    <v-card-text>
      <!-- User Name -->
      <div class="user-infor">
        <div class="user-name text-h4">John Doe</div>
      </div>
      <v-avatar size="200" class="profile-avatar">
        <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
          <!-- Camera button for changing profile photo -->
          <v-btn icon class="camera-button-profile">
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </v-img>
      </v-avatar>
      <!-- User Information -->
      
    </v-card-text>
    <div class="user-information">
      <v-divider></v-divider>
    <v-icon>mdi-email</v-icon>
    <v-text-field
      model-value="johndoe@example"
      variant="outlined"
      readonly
    ></v-text-field>
    <v-text-field
      model-value="(123) 456-7890"
      variant="outlined"
      readonly
    ></v-text-field>
    <v-text-field
      model-value="123 Main St, City"
      variant="outlined"
      readonly
    ></v-text-field>
    <v-text-field
      model-value="123 Main St, City"
      variant="outlined"
      readonly
    ></v-text-field>
  </div>
  </v-card>
  <!-- <v-col>
      <pie-charts />
    </v-col> -->
</template>
<script>
// import PieCharts from "@/components/dashboard/PieCharts.vue";
export default {
  components: {
    // PieCharts,
  },
};
</script>

<style scoped>
.profile-cover {
  border-radius: 10px 10px 0 0;
  height: 300px;
}

.profile-avatar {
  position: absolute;
  bottom: 330px;
  left: 35px;
  z-index: 1;
  border: 4px solid rgb(235, 241, 236);
  border-radius: 100px;
  background: blue;
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
  width: 80%;
  color: #333;
}

.user-info {
  padding: 16px 0;
  color: #555;
  text-align: center;
}
.user-information {
  /* background: #e2c2c2; */
  margin-top: 30px;
  /* padding: 70px; */
}
.user-infor {
  display: flex;
  justify-content: flex-end;
  /* background: green; */
}
</style>
