<template>
    <!-- logged in user menu -->
    <div>
      <v-list-item class="px-2">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ props }">
            <!-- <v-title class="me-8">Nong Phloeut</v-title> -->
            <v-btn icon v-bind="props" class="me-5">
              <v-avatar color="" size="large">
                <v-img src="../../assets/images/profile.png" alt="Avatar" cover>
                </v-img>
              </v-avatar>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              prepend-avatar="https://t3.ftcdn.net/jpg/02/30/60/82/360_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.webp"
              title="John Leider"
              subtitle="john@google.com"
            >
            </v-list-item>

            <v-col cols="auto">
              <v-btn size="small" block variant="outlined">View Profile</v-btn>
            </v-col>
            <v-divider></v-divider>
            <v-list-item
              v-for="(item, i) in languages"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </div>
<template/>


<script>
export default {
  data() {
    return {
      selectedLanguage: {
        name: 'English',
        icon: 'https://www.countryflags.io/us/flat/32.png'
      },
      languages: [
        {
          name: 'English',
          icon: 'https://www.countryflags.io/us/flat/32.png'
        },
        {
          name: 'German',
          icon: 'https://www.countryflags.io/de/flat/32.png'
        },
        {
          name: 'French',
          icon: 'https://www.countryflags.io/fr/flat/32.png'
        },
        {
          name: 'Arabic',
          icon: 'https://www.countryflags.io/ae/flat/32.png'
        },
        // Add more languages and flags as needed
      ]
    };
  },
  methods: {
    changeLanguage(language) {
      this.selectedLanguage = language;
      // You can add logic here to switch the application's language
    }
  }
};
</script>

