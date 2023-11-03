<template>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" sm="2" md="3" v-for="(feedback, index) in feedbacks" :key="index">
          <v-card class="elevation-2" variant="outlined">
            <v-card-title class="text-h6">{{ feedback.title }}</v-card-title>
            <v-card-text>{{ feedback.description }}</v-card-text>
            <v-card-actions>
              <v-btn @click="editFeedback(index)" color="primary" variant="outlined">Edit</v-btn>
              <v-btn @click="deleteFeedback(index)" color="error" variant="outlined">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  export default {
    data() {
      return {
        feedbacks: [
          { title: "Feedback 1", description: "This is the first feedback." },
          { title: "Feedback 2", description: "This is the second feedback." },
          { title: "Feedback 2", description: "This is the second feedback." },
          { title: "Feedback 2", description: "This is the second feedback." },
          // Add more feedback items
        ],
      };
    },
    methods: {
    //   editFeedback(index) {
    //     // Implement edit functionality
    //   },
      deleteFeedback(index) {
        this.feedbacks.splice(index, 1);
      },
    },
  };
  </script>
  