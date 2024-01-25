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
      <v-menu
        v-model="menuSessionDate"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-model="dateSession"
            :label="$t('session.sessionDate')"
            class="cursor mandatory"
            hide-details
            readonly
            v-bind="props"
            prepend-inner-icon="mdi-calendar"
            variant="outlined"
            @click:prepend="menuSessionDate = true"
          />
        </template>
        <!-- <v-date-picker
          v-model="form.dateSession"
          first-day-of-week="1"
          hide-header
          color="primary"
          @update:modelValue="menuSessionDate = false"
        /> -->    <v-date-picker
          first-day-of-week="1"
          :show-current="false"
          hide-header
          color="primary"
        ></v-date-picker>
      </v-menu>
      <custom-title>
        <template #right>
          <v-btn @click="submitForm" class="me-5" color="primary">Cancel</v-btn>
          <v-btn @click="submitForm">Create</v-btn>
        </template>
      </custom-title>
      <!-- <v-menu
        v-model="datePickerDebut"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-bind="props"
            persistent-hint
            readonly
            clearable
            hide-details
            prepend-icon="mdi-calendar"
            variant="underlined"
          ></v-text-field>
        </template>
        <v-date-picker
          first-day-of-week="1"
          :show-current="false"
          hide-header
          color="primary"
        ></v-date-picker>
      </v-menu> -->
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { format } from 'date-fns'
const form = ref({
  nomSession: '',
  dateSession: null,
  salleSession: null,
  commentaire: '',
  membres: []
})
const menuSessionDate = ref(false)
const dateSession = computed(() => {
  return form.value.dateSession !== null
    ? format(new Date(form.value.dateSession), 'dd/MM/yyyy')
    : ''
})
// const defaultFilter = ref({
//   sidx: 'nomArticle',
//   sord: 'DESC',
//   dateDebut: null,
//   dateFin: null,
//   startVide: 0,
//   exercice: [],
//   nomProduit: '',
//   familleProduit: [],
//   motif: '',
//   demandeur: [],
//   nomArticle: '',
//   typeArticle: [],
//   codeArticle: '',
//   iaa: [],
//   distributeur: []
// })
// const filter = ref({ ...defaultFilter.value })
// const menuDateFin = ref(false)
// const dFin = computed(() => {
//   return filter.value.dateFin !== null
//     ? format(new Date(filter.value.dateFin), 'dd/MM/yyyy')
//     : ''
// })
</script>

<style>
.v-date-picker-header {
  display: none
}
.v-date-picker-footer {
  display: none
}
</style>
