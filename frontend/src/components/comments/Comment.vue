<template>
  <v-container fluid class="pa-0">
    <!-- <v-btn>Create Class</v-btn> -->
    <v-row>
      <!--sm Display 2 cards per row on small screens -->
      <!--md Display 3 cards per row on medium screens -->
      <!--lg Display 4 cards per row on large screens -->
      <v-col
        class="pa-1"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        v-for="(feedback, index) in feedbacks"
        :key="index"
      >
      
        <v-card
          class="card elevation-2"
          
        >
          <v-card-title class="card-title">
            <span class="text-h6 font-weight-black">{{ feedback.title }}</span>
            <v-icon>mdi-school</v-icon>
          </v-card-title>

          <v-card-text class="font-weight-bold mt-1"
            >Teacher: {{ feedback.description }}</v-card-text
          >
          <v-card-actions class="card-action">
            <v-card-actions>
              <v-icon>mdi-account-group-outline</v-icon>
              <span class="text-h6 font-weight-black ms-3">50</span>
            </v-card-actions>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn size="small" v-bind="props">
                  <v-icon size="x-large">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
        { title: "12 A", description: "Kuyuka sayu" },
        { title: "12 B", description: "Kusa Kura" },
        { title: "12 C", description: "Kusa Kura" },
        { title: "12 D", description: "Kusa Kura" },
        { title: "12 A", description: "Kuyuka sayu" },
        { title: "12 B", description: "Kusa Kura" },
        { title: "12 C", description: "Kusa Kura" },
        { title: "12 D", description: "Kusa Kura" },
        { title: "12 B", description: "Kusa Kura" },
        { title: "12 C", description: "Kusa Kura" },
        { title: "12 D", description: "Kusa Kura" },
        // Add more feedback tems
      ],
      items: [{ title: "Edit" }, { title: "Delete" }],
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
<style scoped>
.card-title,
.card-action {
  display: flex;
  justify-content: space-between;
  /* background: red; */
}
.card-action {
  padding: 0px 5px 0px 10px;
}
</style>
