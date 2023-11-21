<template>
  <!-- <v-snackbar
    class="snackbar"
    v-model="snackbarVisible"
    :timeout="10000"
    color="success"
  >
    Your password has been changed successfully!
  </v-snackbar> -->
  <v-card width="430" height="500" class="pa-8">
    <v-card class="px-0" variant="flat">
      <v-col cols="auto" class="title px-0">
        <h2 class="login-title">Change Password</h2>
        <v-btn icon="mdi-close" size="small" @Click="cancelDialog"></v-btn>
      </v-col>
    </v-card>
    <v-form ref="form" @submit.prevent="onChangeNewPassword">
      <!-- <h1 class="login-title">{{ $t("btn.resetPassword") }}</h1> -->
      <div class="input-group">
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          {{ $t("changePassword.current") }}
        </div>
        <v-text-field
          :append-inner-icon="
            isCurrentPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
          "
          :type="isCurrentPasswordVisible ? 'text' : 'password'"
          density="compact"
          :placeholder="$t('common.password')"
          v-model="currentPassword"
          prepend-inner-icon="mdi-lock-outline"
          :rules="currentPasswordRole"
          variant="outlined"
          @click:append-inner="toggleVisibleCurrent"
        ></v-text-field>
      </div>
      <div class="input-group">
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          {{ $t("resetPassword.newPassword") }}
        </div>
        <v-text-field
          :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isNewPasswordVisible ? 'text' : 'password'"
          density="compact"
          :placeholder="$t('common.password')"
          prepend-inner-icon="mdi-lock-outline"
          v-model="newPassword"
          :rules="newPasswordRules"
          variant="outlined"
          @click:append-inner="toggleVisibleNew"
        ></v-text-field>
      </div>

      <div class="input-group">
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          {{ $t("resetPassword.confirmPassword") }}
        </div>
        <v-text-field
          :append-inner-icon="
            newPasswordConfirmationVisible ? 'mdi-eye-off' : 'mdi-eye'
          "
          :type="newPasswordConfirmationVisible ? 'text' : 'password'"
          density="compact"
          :placeholder="$t('resetPassword.confirmPassword')"
          prepend-inner-icon="mdi-lock-outline"
          v-model="newPasswordConfirmation"
          :rules="confirmPasswordRules"
          variant="outlined"
          @click:append-inner="toggleVisibleCon"
        ></v-text-field>
        <v-card
          v-if="errorText"
          class="mx-auto pa-1"
          variant="tonal"
          color="red"
        >
          <span>{{ errorText }}</span>
        </v-card>
        <v-card v-else class="mx-auto pa-1" variant="flat">
          <span class="error">.</span>
        </v-card>
      </div>
      <v-btn type="submit" color="teal darken-4" block class="mt-5">{{
        $t("btn.chagePassword")
      }}</v-btn>
    </v-form>
  </v-card>
</template>
<script setup>
import { ref, getCurrentInstance, watch } from "vue";
import { useAuthStore } from "@/stores/auth.js";
const authStore = useAuthStore();

const currentPassword = ref("123456789");
const newPassword = ref("123456789");
const newPasswordConfirmation = ref("123456789");

const isCurrentPasswordVisible = ref(false);
const isNewPasswordVisible = ref(false);
const newPasswordConfirmationVisible = ref(false);
const errorText = ref("");

const toggleVisibleCurrent = () => {
  isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value;
};
const toggleVisibleNew = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value;
};
const toggleVisibleCon = () => {
  newPasswordConfirmationVisible.value = !newPasswordConfirmationVisible.value;
};

const currentPasswordRole = [
  (v) => !!v || "Current password is required",
  (v) => (v && v.length >= 8) || "Password must be 8  characters or more!",
];
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
    (rule) => rule(newPasswordConfirmation.value) === true
  );

  const currentPasswordValid = currentPasswordRole.every(
    (rule) => rule(currentPassword.value) === true
  );

  if (!newPasswordValid || !confirmPasswordValid || !currentPasswordValid) {
    return false;
  }

  return true;
};

watch([newPassword, newPasswordConfirmation], ([newVal, confirmVal]) => {
  if (newVal !== confirmVal) {
    errorText.value = "Passwords do not match";
  } else {
    errorText.value = "";
  }
});

const onChangeNewPassword = async () => {
  if (!validateForm()) {
    return;
  }
  try {
    await authStore.userChangePassword(
      currentPassword.value, // put it in order
      newPassword.value
    );
    if (authStore.isChanged) {
      emit("passwordChanged");
      console.log("change new password");
    }
  } catch {
    console.log("error");
  }
};

const { emit } = getCurrentInstance();
const cancelDialog = () => {
  emit("cancel");
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}
.error{
  color:white;
}
</style>
