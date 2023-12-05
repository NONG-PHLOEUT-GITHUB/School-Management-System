<template>
  <v-app-bar collapse :elevation="2">
    <switcher-language />
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
        <v-form ref="form" @submit.prevent="userForgotPassword">
          <h1 class="login-title">{{ $t('login.form.forgot-pass') }}</h1>
          <span>{{ $t('forgot-pass.message-forgot-pass') }}</span>
          <div class="input-group">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('login.form.email') }}
            </div>
            <v-text-field
              ref="emailField"
              density="compact"
              :placeholder="$t('common.emailAddress')"
              prepend-inner-icon="mdi-email-outline"
              v-model="email"
              :rules="emailRules"
              variant="outlined"
              no-validation
              :hint="helperText"
            ></v-text-field>
            <span :rules="emailRules"></span>
          </div>
          <v-btn
            type="submit"
            color="teal darken-4"
            block
            class="login-button"
            >{{ $t('btn.resetPassword') }}</v-btn
          >
          <div class="center-text text-center mt-4">
            <router-link to="/login">{{
              $t('forgot-pass.back-login')
            }}</router-link>
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import SwitcherLanguage from '@/components/common/SwitcherLanguage.vue'
import { useAuthStore } from '@/stores/auth'
// import { useRouter } from "vue-router";
import { ref } from 'vue'

// const router = useRouter();
const userReset = useAuthStore()
const helperText = "We'll send a password reset link to this email address."
const email = ref('phloeutnong@gmail.com')
const emailRules = [
  (v) => !!v || 'common.passReuire',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
]

const validateForm = () => {
  const emailValid = emailRules.every((rule) => rule(email.value) === true)

  if (!emailValid) {
    return false
  }

  return true
}

const userForgotPassword = async () => {
  if (!validateForm()) {
    return
  }
  try {
    await userReset.forgotPassword(email.value)
    if (userReset.isResetPassword) {
      // await router.push({ path: "reset-new-password" });
      this.$root.$notif(this.$t('alert.success'), {
        type: 'success',
        color: 'primary'
      })
    } else {
      // errorText.value = "Email or password is incorrect"; // Set the error message
      console.log('Email or password is incorrect')
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
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
