<template>
  <v-container fluid class="container">
    <v-card class="me-4 mx-auto py-5" width="400" color="pink-lighten-3">
      <v-row class="p-1">
        <v-col cols="4" >
          <!-- Adjust the number of columns as needed -->
          <v-img
            src="../../../public/assets/images/student.png"
            aspect-ratio="1.4"
            contain
          ></v-img>
        </v-col>
        <v-col cols="8" >
          <!-- Adjust the number of columns as needed -->
          <template v-slot:default>
            <v-card-title>Student Total</v-card-title>
            <v-card-text>2005</v-card-text>
          </template>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="me-4 mx-auto py-5" width="400" color="pink-lighten-3">
      <v-row class="p-1">
        <v-col cols="4" >
          <!-- Adjust the number of columns as needed -->
          <v-img
            src="../../../public/assets/images/teaching.png"
            aspect-ratio="1.4"
            contain
          ></v-img>
        </v-col>
        <v-col cols="8" >
          <!-- Adjust the number of columns as needed -->
          <template v-slot:default>
            <v-card-title>Student Total</v-card-title>
            <v-card-text> This is content </v-card-text>
          </template>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="me-4 mx-auto" width="400" prepend-icon="mdi-home" color="blue-lighten-1">
      <template v-slot:title> This is a title </template>

      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-card class="mx-auto" width="400" prepend-icon="mdi-home" color="light-blue-darken-1">
      <template v-slot:title> This is a title </template>

      <v-card-text> This is content </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.container {
  display: flex;
  /* background: #000; */
  padding: 0;
}
</style>
