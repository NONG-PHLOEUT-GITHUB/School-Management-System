<template>
  <v-btn><v-icon> mdi-pencil-plus</v-icon></v-btn> 
    <v-card variant="flat">
      <v-row class="mt-2">
        <v-col cols="4">
          <v-text-field
            label="Enter class name"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Enter teacher name"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Enter number of student"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
</template>
