<template>
  <v-app-bar collapse :elevation="2">
    <switcher-language />
    <!-- <div>Language</div> -->
  </v-app-bar>
  <div class="login-page">
    <div class="login-container">
      <div class="login-content">
        <h1 class="logo">SCHOOL MANAGEMENT</h1>
        <v-img
          class="login-image"
          src="../../../public/assets/images/Forgotpassword.png"
          aspect-ratio="1"
          cover
        ></v-img>
      </div>
      <v-card class="login-card">
        <v-form ref="form" @submit.prevent="login">
          <h1 class="login-title">{{$t("login.form.forgot-pass")}}</h1>
          <span>{{$t("forgot-pass.message-forgot-pass")}}</span>
          <!-- <span>Remember to check your email for a password reset link.</span> -->
          <div class="input-group">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t("login.form.email") }}
            </div>
            <v-text-field
              ref="emailField"
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              v-model="email"
              :rules="emailRules"
              variant="outlined"
              no-validation
              :hint="helperText"
            ></v-text-field>
            <span :rules="emailRules"></span>
          </div>
          <v-btn type="submit" color="teal darken-4" block class="login-button"
            >Reset Password</v-btn
          >
          <div class="center-text text-center mt-4">
            <!-- <span :to="{name:'login' }">Back to Login</span> -->
            <router-link to="/login">{{$t('forgot-pass.back-login')}}</router-link>
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script>
import SwitcherLanguage from "@/components/common/SwitcherLanguage.vue";

export default {
  components: {
    // AlertNotification,
    SwitcherLanguage,
  },
  data: () => ({
    helperText: "We'll send a password reset link to this email address.",
    toastData: [],
    loginSuccess: false,
    visible: false,
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be 8  characters or more!",
    ],
    selectedLanguage: "",
  }),
  mounted() {
    this.selectLanguage(); // Call selectLanguage method when the component is mounted
  },

  watch: {
    selectedLanguage: function (newLanguage) {
      localStorage.setItem("selectedLanguage", newLanguage);
    },
  },
  methods: {
    selectLanguage() {
      this.selectedLanguage = localStorage.getItem("selectedLanguage");
      console.log("fff", this.selectedLanguage);
    },
  },
};
</script>
<style scoped>
.login-page {
  background: #f4f4f4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
}

.login-content {
  flex: 1;
  padding: 2rem;
  /* text-align: center; */
}

.logo {
  font-size: 2rem;
  color: #333;
}

.login-image {
  margin-top: 2rem;
}

.login-card {
  flex: 1;
  padding: 2rem;
  background: #f5f5f5;
  border-left: 1px solid #e0e0e0;
}

.login-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.input-group {
  margin: 1.5rem 0;
}

.input-label {
  font-size: 1.2rem;
  color: #666;
}

.forgot-password-link {
  font-size: 1rem;
  color: #666;
  text-decoration: none;
  display: block;
  margin-top: 1rem;
}

.login-button {
  margin-top: 2rem;
}
</style>
