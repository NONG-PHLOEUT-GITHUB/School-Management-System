<template>
  <custom-title icon="mdi-lightbulb-on">
    <span class="d-inline-block capitalize-first-letter">Create user</span>
  </custom-title>
  <div>
    <v-card class="px-4">
      <custom-title icont="mdi-information-outline">
        <span class="d-inline-block capitalize-first-letter"
          >User information</span
        >
      </custom-title>
      <v-row class="mt-2">
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-50"></v-divider>
      <v-row class="mt-2">
        <v-col cols="3">
          <v-text-field
            label="Label"
            variant="outlined"
            type="date"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Label" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <custom-title>
        <template #right>
          <v-btn @click="submitForm" class="me-5" color="primary">Cancel</v-btn>
          <v-btn @click="submitForm">Create</v-btn>
        </template>
      </custom-title>
      <DatePicker v-model="selectedDate" label="Select Date" :placeholder="placeholder" :rules="rules" :required="true"></DatePicker>
    </v-card>
  </div>
</template>

<script>
import DatePicker from '@/components/global/BaseDatePicker.vue';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      selectedDate: null,
      placeholder: 'YYYY-MM-DD',
      rules: [],
    };
  },
};
</script>