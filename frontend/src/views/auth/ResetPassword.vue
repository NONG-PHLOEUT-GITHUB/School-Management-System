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
        <v-form ref="form" @submit.prevent="resetNewPassword">
          <h1 class="login-title">{{ $t("btn.resetPassword") }}</h1>
          <div class="input-group">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t("resetPassword.newPassword") }}
            </div>
            <v-text-field
              :append-inner-icon="
                isPasswordVisibleNew ? 'mdi-eye-off' : 'mdi-eye'
              "
              :type="isPasswordVisibleNew ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('common.password')"
              prepend-inner-icon="mdi-lock-outline"
              v-model="newPassword"
              :rules="newPasswordRules"
              variant="outlined"
              @click:append-inner="toggleVisibleNewpassword"
            ></v-text-field>
          </div>

          <div class="input-group">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t("resetPassword.confirmPassword") }}
            </div>
            <v-text-field
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="isPasswordVisible ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('resetPassword.confirmPassword')"
              prepend-inner-icon="mdi-lock-outline"
              v-model="password_confirmation"
              :rules="confirmPasswordRules"
              variant="outlined"
              @click:append-inner="toggleVisible"
            ></v-text-field>
            <v-card
              class="mx-auto"
              v-if="errorText"
              variant="tonal"
              color="red"
            >
              <v-card-text>
                <div>{{ errorText }}</div></v-card-text
              >
            </v-card>
          </div>

          <router-link to="/forget-password" class="forgot-password-link">{{
            $t("login.form.forgot-pass")
          }}</router-link>
          <v-btn
            type="submit"
            color="teal darken-4"
            block
            class="login-button"
            >{{ $t("btn.resetPassword") }}</v-btn
          >
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import SwitcherLanguage from "@/components/common/SwitcherLanguage.vue";
import { useAuthStore } from "@/stores/auth.js";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const newPassword = ref("123456789");
const password_confirmation = ref("123456789");
const isPasswordVisible = ref(false);
const isPasswordVisibleNew = ref(false);
const token = route.params.token;
const errorText = ref(""); // Create a ref for error messages

const toggleVisible = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const toggleVisibleNewpassword = () => {
  isPasswordVisibleNew.value = !isPasswordVisibleNew.value;
};

const confirmPasswordRules = [
  (v) => !!v || "Password is required",
  (v) => (v && v.length >= 8) || "Password must be 8 characters or more!",
];
const newPasswordRules = [
  (v) => !!v || "Password is required",
  (v) => (v && v.length >= 8) || "Password must be 8 characters or more!",
];

const validateForm = () => {
  const newPasswordValid = confirmPasswordRules.every(
    (rule) => rule(newPassword.value) === true
  );
  const confirmPasswordValid = confirmPasswordRules.every(
    (rule) => rule(password_confirmation.value) === true
  );

  if (!newPasswordValid || !confirmPasswordValid) {
    return false;
  }

  return true;
};

watch([newPassword, password_confirmation], ([newVal, confirmVal]) => {
  if (newVal !== confirmVal) {
    console.log("Passwords do not match");
    errorText.value = "Passwords do not match"; // Set the error message
    // You can set an error message or perform other actions here
  } else {
    errorText.value = ""; // Set the error message
    // console.log('Passwords match');
    // Clear any previous error messages or perform other actions here
  }
});

const resetNewPassword = async () => {
  if (!validateForm()) {
    return;
  }
  try {
    await authStore.userResetNewPassword(
      token,
      newPassword.value,
      password_confirmation.value
    );

    if (authStore.isReset) {
      let userRole = authStore.data
      console.log('role in reset password',authStore.data);
      localStorage.setItem("user_role", userRole);
      if (userRole === 1) {
        await router.push({ path: "/dashboard/user" });
      }
      else if (userRole === 2) {
        await router.push({ path: "/dashboard/user" });
      } else {
        await router.push({ path: "/dashboard/user" });
      }
    } else {
      // errorText.value = "Email or password is incorrect"; // Set the error message
      console.log("Email or password is incorrect");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
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
