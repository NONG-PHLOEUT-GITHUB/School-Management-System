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
          src="../../../public/assets/images/Mobilelogin.png"
          aspect-ratio="1"
          cover
        ></v-img>
      </div>
      <v-card class="login-card">
        <v-form ref="form" @submit.prevent="login">
          <h1 class="login-title">{{ $t('login.title') }}</h1>
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
            ></v-text-field>
            <!-- <span :rules="emailRules"></span> -->
          </div>
          <div class="input-group">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('login.form.password') }}
            </div>
            <v-text-field
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="isPasswordVisible ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('common.password')"
              prepend-inner-icon="mdi-lock-outline"
              v-model="password"
              :rules="passwordRules"
              variant="outlined"
              @click:append-inner="toggleVisible"
            ></v-text-field>
            <v-card
              v-if="errorText"
              class="mx-auto pa-1"
              variant="tonal"
              color="red"
            >
              <span>{{ errorText }}</span>
            </v-card>
            <v-card v-else class="mx-auto pa-1" variant="flat" color="#f4f4f4">
              <span class="error">.</span>
            </v-card>
          </div>

          <router-link to="/forget-password" class="forgot-password-link">{{
            $t('login.form.forgot-pass')
          }}</router-link>
          <v-btn
            type="submit"
            color="teal darken-4"
            block
            class="login-button"
            >{{ $t('login.title') }}</v-btn
          >
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import SwitcherLanguage from '@/components/common/SwitcherLanguage.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('phloeutnong@gmail.com')
const password = ref('123456789')
const isPasswordVisible = ref(false)
const errorText = ref('') // Create a ref for error messages
const app = getCurrentInstance()
const toggleVisible = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
]

const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => (v && v.length >= 8) || 'Password must be 8 characters or more!'
]

const validateForm = () => {
  const emailValid = emailRules.every((rule) => rule(email.value) === true)
  const passwordValid = passwordRules.every(
    (rule) => rule(password.value) === true
  )

  if (!emailValid || !passwordValid) {
    return false
  }

  return true
}

const login = async () => {
  if (!validateForm()) {
    return
  }
  try {
    await authStore.login({ email: email.value, password: password.value })

    if (authStore.isAuthenticated) {
      let userRole = authStore.user.role
      localStorage.setItem('user_role', userRole)
      app.appContext.config.globalProperties.$notif('Login cucesscefully', {
        type: 'success',
        color: 'primary'
      })
      if (userRole === 1) {
        await router.push({ path: '/dashboard/user' })
      } else if (userRole === 2) {
        await router.push({ path: '/dashboard/user' })
      } else {
        await router.push({ path: '/dashboard/student' })
      }
    } else {
      errorText.value = 'Email or password is incorrect' // Set the error message
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
  margin-top: -15px;
}

.login-button {
  margin-top: 2rem;
}
.error {
  color: #f5f5f5;
}
</style>
