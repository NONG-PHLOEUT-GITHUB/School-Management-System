<template>
    <v-dialog v-model="dialog" :max-width="options.width" style="z-index:999;" @keydown.esc="cancel">
      <v-card tile>
        <v-card-title class="pa-0">
          <v-toolbar dark :color="options.color" dense>
            <v-toolbar-title class="white--text">
              <span>{{ title }}</span>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon dark @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>
        <v-card-text v-show="!!message" class="py-2" v-html="message" />
  
        <v-divider />
  
        <v-card-actions>
          <v-spacer />
          <v-btn v-if="options.btnCancel" ref="btnCancel" color="grey" text class="d-block" @click="close">
            {{ $t("button.cancel") }}
          </v-btn>
          <v-btn ref="btnNo" color="grey" text class="d-block" @click="cancel">
            {{ $t("button.no") }}
          </v-btn>
          <v-btn ref="btnYes" color="primary darken-1" class="d-block" text @click="agree">
            {{ $t("button.yes") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, defineExpose } from 'vue';
  
//   const props = defineProps(['$t']);
  
  const dialog = ref(false);
  const message = ref(null);
  const title = ref(null);
  const rejectFunc = ref(null);
  const resolveFunc = ref(null);
  const options = ref({
    color: 'primary',
    width: 400,
    focusElt: 'btnNo',
    btnCancel: false
  });
  
  const open = (tit, mes, opts) => {
    dialog.value = true;
    title.value = tit;
    message.value = mes;
    options.value = { ...options.value, ...opts };
    return new Promise((resolve, reject) => {
      resolveFunc.value = resolve;
      rejectFunc.value = reject;
    });
  };
  
  defineExpose({ open });
  
  const agree = () => {
    resolveFunc.value();
    dialog.value = false;
  };
  
  const cancel = () => {
    rejectFunc.value({ cancel: false });
    dialog.value = false;
  };
  
  const close = () => {
    rejectFunc.value({ cancel: false });
    dialog.value = false;
  };
  </script>
  