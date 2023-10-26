<template>
  <v-card
    width="100%"
    elevation="0"
    class="customer-title d-flex justify-space-between py-0"
  >
    <div class="d-flex align-center">
      <v-icon size="x-large" color="cyan-darken-3">{{ icon }}</v-icon>
      <v-title class="text-h5 text-md-h5 text-lg-h5 font-weight-bold ma-3 mt-4"
        >{{ title }}</v-title
      >
    </div>
    <!-- <div>
      <v-avatar color="grey-lighten-1" style="background: #c72f2f;">
        <v-icon size="large">mdi-information-outline</v-icon>
      </v-avatar>
    </div> -->
  </v-card>
</template>

<script>
export default {
  name: "CustomTitle",
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style scoped>
/* .customer-title {
  background: rgb(245, 239, 239);
} */
</style>
