<!-- <template>
  <custom-title icon="mdi-lightbulb-on">
    <span class="d-inline-block capitalize-first-letter">Create user</span>
  </custom-title>
  <div>
    <v-card v-for="section in sections" :key="section.title">
      <custom-title :icon="section.icon">
        <span class="d-inline-block capitalize-first-letter">{{
          section.title
        }}</span>
      </custom-title>

      <v-card variant="tonal" class="px-5">
        <v-row class="mt-2">
          <v-col v-for="field in section.fields" :key="field.label" cols="3">
            <v-text-field label="Label" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-divider class="border-opacity-50"></v-divider>
        <v-row class="mt-2">
          <v-col v-for="field in section.fields" :key="field.label" cols="3">
            <v-text-field label="Label" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Personal Information",
          icon: "mdi-home",
          fields: [
            { label: "Field 1" },
            { label: "Field 2" },
            { label: "Field 3" },
          ],
        },
        {
          title: "Contact Information",
          icon: "mdi-web",
          fields: [
            { label: "Field 4" },
            { label: "Field 5" },
            { label: "Field 6" },
          ],
        },
      ],
    };
  },
};
</script> -->





<template>
    <div>

      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
        ></v-text-field>
  
  
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
            create
        </v-btn>

      </v-card>
    </div>
  </template>
