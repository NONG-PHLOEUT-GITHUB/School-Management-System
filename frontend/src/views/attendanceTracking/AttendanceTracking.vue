<template>
  <custom-title icon="mdi-check-circle">
    <span class="d-inline-block capitalize-first-letter">Attendance Tracking</span>
  </custom-title>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        sm="6"
        md="4"
        lg="2"
        class="pa-1"
      >
        <v-card
          class="pa-2"
          :color="card.model ? 'red' : ''"
          variant="outlined"
        >
          <v-card-item class="pa-0">
            <v-card-title>
              <v-avatar>
                <v-img :src="card.imageSrc" alt="John"></v-img>
              </v-avatar>
              <span>John shaka</span>
            </v-card-title>
            <template v-slot:append>
              <v-switch
                v-model="card.model"
                hide-details
                inset
                @click="toggleSwitcher(index)"
              ></v-switch>
            </template>
          </v-card-item>
          <v-divider class="mb-3 mt-2"></v-divider>
          <!-- disabled -->
          <v-select
            label="Status"
            :items="[
              'Present',
              'Absent',
              'Early',
              'Excused',
              'Unexcused',
              'On leave',
              'No show',
            ]"
            variant="outlined"
          ></v-select>
          <!-- Move the v-card-actions outside v-expand-transition -->
          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Message </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="toggleCard(index)"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>
              <v-textarea
                variant="outlined"
                rows="2"
                row-height="20"
              ></v-textarea>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-data-table
    v-model="selected"
    class="elevation-1 text-center"
    :headers="headers"
    :items="desserts"
    items-per-page="10"
    item-value="name"
    item-selectable="selectable"
    return-object
    show-select 
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        },
        {
          model: false,
          show: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
        }
      ],
      
    };
  },
  methods: {
    loadMoreData() {
      // Simulate loading more data (replace this with your actual data loading logic)
      const newData = [
        // Load your new data here
      ];

      // Append the new data to the existing cards
      this.cards = [...this.cards, ...newData];
    },
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show;
      console.log(index);
    },
    toggleSwitcher(index) {
      this.cards[index].model = !this.cards[index].model;
      console.log(index);
    },
  },
  computed: {
    counterAttendance() {
      return this.cards.filter((card) => card.show || card.model).length;
    },
  },
};
</script>

<style scoped>
.card-action {
  display: flex;
  justify-content: space-between;
}
.card-action {
  padding: 0px 5px 0px 10px;
}
</style>
