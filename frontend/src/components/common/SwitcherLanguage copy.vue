<!-- <template>
    <v-row justify="center">
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="brown" size="small">
              <v-img :src="getSelectedFlag" alt="Selected Flag" cover>
                </v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto">
              <v-btn rounded variant="text" @click="selectLanguage('khmer')">
                <img src="../assets/images/khmer.webp" alt="Khmer Flag" :width="30"/>
                Khmer
              </v-btn>
              <br>
              <v-btn rounded variant="text" @click="selectLanguage('english')">
                <img src="../assets/images/England.png" alt="English Flag" :width="30"/>
                English
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
</template>

<script>
export default {
  data: () => ({
    flag: {
      selectedLanguage: null,
    },
  }),
  methods: {
    selectLanguage(language) {
      this.flag.selectedLanguage = language;
    },
  },
  computed: {
    getSelectedFlag() {
      if (this.flag.selectedLanguage === 'khmer') {
        return "../assets/images/khmer.webp";
      } else if (this.flag.selectedLanguage === 'english') {
        return "../assets/images/England.png";
      } else {
        return '../assets/images/England.png';
      }
    },
  },
};
</script>

<style>
img{
  margin-right: 10px;
}
</style> -->


<template>
  <!-- <v-row justify="center">
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
  </v-row> -->
  <select class="App-language" v-model="locale">
      <option
        v-for="optionLocale in supportLocales"
        :key="`locale-${optionLocale}`"
        :value="optionLocale"
      >
        {{ optionLocale }}
      </option>
    </select>
</template>
<!-- 
<script>
export default {
  data: () => ({
    flag: {
      selectedLanguage: null,
    },
  }),
  mounted() {
    const selectedLanguage = localStorage.getItem('lang');
    if (selectedLanguage) {
      this.flag.selectedLanguage = selectedLanguage;
    }
  },
  methods: {
    selectLanguage(language) {
      this.flag.selectedLanguage = language;
      localStorage.setItem('lang', language);
      this.$i18n.global.locale = language;
    },
    getFlagImage(language) {
      return require(`@/assets/images/${language}.png`);
    },
  },
};
</script> -->



<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from "../../plugins/i18n";

const { locale } = useI18n({ useScope: "global" });
watch(locale, (val) => {
  setI18nLanguage(val);
});
</script>


