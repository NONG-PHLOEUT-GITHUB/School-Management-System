<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="small">
            <v-img :src="getSelectedFlag" alt="Selected Flag" cover></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto">
            <v-btn rounded variant="text" @click="selectLanguage('kh')">
              <img :src="getFlagImage('kh')" alt="Khmer Flag" :width="30" />
              {{ $t('khmer') }}
            </v-btn>
            <br>
            <v-btn rounded variant="text" @click="selectLanguage('en')">
              <img :src="getFlagImage('en')" alt="English Flag" :width="30" />
              {{ $t('english') }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script setup>

import { useI18n } from "vue-i18n";
import { setI18nLanguage } from "../../plugins/i18n";

const { locale } = useI18n({ useScope: "global" });

const getSelectedFlag = () => {
  return getFlagImage(locale.value);
};

const getFlagImage = (language) => {
  return `../assets/images/${language}.png`;
};

const selectLanguage = (language) => {
  setI18nLanguage(language);
};
</script>


