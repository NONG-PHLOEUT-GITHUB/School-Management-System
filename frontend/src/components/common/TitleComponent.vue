<template>
  <v-card>
    <v-card-title class="blue lighten-2 white--text">
      <v-icon left>{{ icon }}</v-icon>
      <span>{{ titleText }}</span>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>
