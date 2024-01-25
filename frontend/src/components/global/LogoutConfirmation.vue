<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar color="#FFC107">
          <v-toolbar-title>
            {{ title }}
          </v-toolbar-title>
        </v-toolbar>
      </v-card-title>
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn
          elevation="4"
          variant="outlined"
          :color="primary"
          class="d-block"
          dark
          @click="agree"
        >
          {{ options.agreeBtnText }}
        </v-btn>
        <v-btn
          elevation="4"
          variant="outlined"
          ref="btnNo"
          color="red"
          @click="cancel"
        >
          {{ options.denyBtnText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  data() {
    return {
      dialog: false,
      agreeCallback: null,
      cancelCallback: null,
      message: null,
      title: null,
      options: {
        type: 'error',
        width: 290,
        agreeBtnText: this.$t('btn.yes'),
        denyBtnText: this.$t('btn.cancel')
      }
    }
  },
  computed: {
    bgColor() {
      const colors = {
        info: '#233F740F',
        error: '#FF52520F',
        warning: '#FFC1070F'
      }

      return colors[this.options.type || 'info']
    },
    textColor() {
      const colors = {
        info: 'primary--text',
        error: 'error--text',
        warning: 'warning--text'
      }

      return colors[this.options.type || 'info']
    },
    btnColor() {
      const colors = {
        info: 'var(--v-primary-base)',
        error: 'var(--v-error-base)',
        warning: 'var(--v-warning-base)'
      }

      return colors[this.options.type || 'info']
    }
  },
  methods: {
    open({ title, message, options, agree = () => {}, cancel = () => {} }) {
      this.dialog = true
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)
      this.agreeCallback = agree
      this.cancelCallback = cancel
    },
    async agree() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_role')
      await this.agreeCallback()
      this.dialog = false
      // app.appContext.config.globalProperties.$notif(
      //   'Logout cuccessfully',
      //   {
      //     type: 'cuccess',
      //     color: 'info'
      //   }
      // )
      this.$router.push({ name: 'Login' })
    },
    async cancel() {
      await this.cancelCallback()
      this.dialog = false
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 1rem !important;
}
.cancel-btn {
  background: transparent !important;
}
.cancel-btn.btn-info {
  border: 1px solid var(--v-primary-base);
  color: var(--v-primary-base);
}
.cancel-btn.btn-error {
  border: 1px solid var(--v-error-base);
  color: var(--v-error-base);
}
</style>
