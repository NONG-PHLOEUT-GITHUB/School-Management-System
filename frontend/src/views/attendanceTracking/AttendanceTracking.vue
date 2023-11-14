<template>
  <!-- <v-container fluid class="pa-2"> -->
    <v-card>
    <v-row>
      <v-col sm="6" md="4" lg="2" class="pa-1">
        <v-card
          class="pa-2"
          :color="model ? 'red' : ''"
          variant="outlined"
        >
          <v-card-item class="pa-0">
            <v-card-title>
              <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                ></v-img>
              </v-avatar>
            </v-card-title>
            <template v-slot:append>
              <v-switch v-model="model" hide-details inset></v-switch>
            </template>
          </v-card-item>
          <v-divider class="mb-3 mt-2"></v-divider>
          <v-select
            label="Status"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
          ></v-select>
          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Message </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-textarea
                label="Label"
                variant="outlined"
                rows="2"
                row-height="20"
              ></v-textarea>
            </div>
          </v-expand-transition>
        </v-card>
        
      </v-col>
    </v-row>
  </v-card>
  <!-- </v-container> -->
</template>
<script>
export default {
  data() {
    return {
      model: false,
      show: false,
    };
  },
  computed: {
    getCardBackgroundColor() {
      return this.model ? "red" : ""; // Set your desired background color
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
