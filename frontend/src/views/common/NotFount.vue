<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-12">
      <v-col cols="12" sm="8" md="6">
          <v-card class="pa-12 text-center" elevation="0" v-if="show">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" width="500"
            />
          <!-- <v-icon x-large color="red darken-2">mdi-emoticon-sad-outline</v-icon> -->
          <h1 class="headline font-weight-bold mb-4">404</h1>
          <p class="subheading mb-6">Oops! Page not found.</p>
          <v-btn to="/" color="gray" large> Back to Home </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    // Add a delay to make the card fade in after a short delay
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
};
</script>

<style scoped>
/* Modern styling */
.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Fade-in animation */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter, .v-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
