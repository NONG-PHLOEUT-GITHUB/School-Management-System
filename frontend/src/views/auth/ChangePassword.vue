<template>
  <v-card width="430" height="500" class="pa-8">
    <v-card class="px-0" variant="flat">
      <v-col cols="auto" class="title px-0">
        <h2 class="login-title">Change Password</h2>
        <v-btn icon="mdi-close" size="small" @Click="cancelDailog"></v-btn>
      </v-col>
    </v-card>
    <v-form ref="form" @submit.prevent="resetNewPassword">
      <!-- <h1 class="login-title">{{ $t("btn.resetPassword") }}</h1> -->
      <div class="input-group">
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          {{ $t("resetPassword.newPassword") }}
        </div>
        <v-text-field
          :append-inner-icon="isPasswordVisibleNew ? 'mdi-eye-off' : 'mdi-eye'"
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
          {{ $t("resetPassword.newPassword") }}
        </div>
        <v-text-field
          :append-inner-icon="isPasswordVisibleNew ? 'mdi-eye-off' : 'mdi-eye'"
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
        <v-card class="mx-auto" v-if="errorText" variant="tonal" color="red">
          <v-card-text>
            <div>{{ errorText }}</div></v-card-text
          >
        </v-card>
      </div>
      <v-btn type="submit" color="teal darken-4" block class="mt-5">{{
        $t("btn.chagePassword")
      }}</v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    cancelDailog() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
}
</style>
