<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="250"
    rounded
    width="100%"
  >
    <div>
      <h2 class="text-h4 font-weight-black text-orange">Congratulations!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You are officially a part of the Vuetify Community!
      </div>

      <p class="text-body-2 mb-4">
        Please head over to your inbox/spam or others folder to find our
        verificaiton email.
      </p>

      <!-- <v-btn variant="text" color="orange">Go to Login</v-btn> -->
    </div>
  </v-sheet>
  <v-card>
    <h1>Recent Results</h1>
    <div>
      <v-progress-linear v-model="power" color="amber" height="15">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <br />

      <v-progress-linear v-model="skill" color="blue-grey" height="15">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <br />

      <v-progress-linear v-model="knowledge" height="15">
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </v-progress-linear>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78
  })
}
</script>
