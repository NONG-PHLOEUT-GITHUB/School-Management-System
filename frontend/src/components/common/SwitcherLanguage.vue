<template>
    <v-row justify="center">
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="brown" size="small">
              <v-img :src="getSelectedFlag" alt="Selected Flag" cover>
                </v-img>
                <!-- <img :src="getSelectedFlag" alt="" cover> -->
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
      selectedLanguage: null, // Initially, no language is selected
    },
  }),
  mounted() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this.flag.selectedLanguage = selectedLanguage;
    }
  },

  methods: {
    selectLanguage(language) {
      this.flag.selectedLanguage = language;
      localStorage.setItem('selectedLanguage', language);
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
</style>