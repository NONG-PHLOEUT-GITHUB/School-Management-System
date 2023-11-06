<template>
    <v-card class="mt-1">
    <div class="user-information">
      <!-- <v-divider></v-divider> -->
      <v-icon>mdi-email</v-icon> Email
      <v-text-field
        model-value="johndoe@example"
        variant="outlined"
        readonly
      ></v-text-field>
      <v-icon>mdi-phone</v-icon> Phone number
      <v-text-field
        model-value="(123) 456-7890"
        variant="outlined"
        readonly
      ></v-text-field>
      <v-icon>mdi-map-marker</v-icon>Address
      <v-text-field
        model-value="123 Main St, City"
        variant="outlined"
        readonly
      ></v-text-field>
      <v-icon>mdi-cake-variant</v-icon>Date of birth
      <v-text-field
        model-value="123 Main St, City"
        variant="outlined"
        readonly
      ></v-text-field>
    </div>
  </v-card>
</template>