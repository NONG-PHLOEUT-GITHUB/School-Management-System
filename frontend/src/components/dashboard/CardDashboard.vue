<template>
<v-container fluid class="pa-0">
  <v-row justify="center">
    <v-col cols="0">
      <v-card class="elevation-3 rounded-xl">
        <v-card-text>
          <div class="d-flex justify-center align-center">
            <v-icon size="48" class="mr-2">mdi-account-group</v-icon>
            <div>
              <div class="text-h6">Total Students</div>
              <div class="text-h3 font-weight-bold">2500</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="0">
      <v-card class="elevation-3 rounded-xl">
        <v-card-text>
          <div class="d-flex justify-center align-center">
            <v-icon size="48" class="mr-2">mdi-account-tie</v-icon>
            <div>
              <div class="text-h6">Total Teacher</div>
              <div class="text-h3 font-weight-bold">30</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="0">
      <v-card class="elevation-3 rounded-xl">
        <v-card-text>
          <div class="d-flex justify-center align-center">
            <v-icon size="48" class="mr-2">mdi-school</v-icon>
            <div>
              <div class="text-h6">Total Courses</div>
              <div class="text-h3 font-weight-bold">30</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="0">
      <v-card class="elevation-3 rounded-xl">
        <v-card-text>
          <div class="d-flex justify-center align-center">
            <v-icon size="48" class="mr-2">mdi-calendar-month</v-icon>
            <div>
              <div class="text-h6">Next Event</div>
              <div class="font-weight-bold">Titlt: Semester Start</div>
              <div class="text-h6">Date: {{ formatDate }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  computed: {
    formatDate() {
      // Use your preferred date formatting method here
      return new Date().toLocaleDateString();
    },
  },
};
</script>