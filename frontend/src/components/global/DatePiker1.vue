<template>
    <div>
      <v-menu v-model="showDatePicker" min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            ref="textField"
            class="appended-icon"
            :value="formattedDate"
            :rules="rules"
            :placeholder="placeholder"
            @click:clear="content = null"
            :disabled="disabled"
            v-on="on"
            v-bind="attrs"
            prepend-inner-icon="mdi-calendar-blank-outline"
            clearable
            readonly
            outlined
            dense
            persistent-placeholder
            :label="label"
            :class="{ required: required }"
          >
          </v-text-field>
        </template>
        <v-date-picker
          v-model="content"
          @change="showDatePicker = false"
          :type="type"
        ></v-date-picker>
      </v-menu>
    </div>
  </template>
  
  <script>
  import { formatDate } from '@/helpers/form-data.js'
  
  export default {
    name: 'BaseDatePicker',
    props: {
      value: {
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: 'JJ/MM/AAAA',
      },
      format: {
        type: String,
        default: 'dd/MM/yyyy',
      },
      rules: {
        type: Array,
        default: () => [],
      },
      required: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'date',
      },
    },
    data() {
      return {
        showDatePicker: false,
      }
    },
    computed: {
      content: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        },
      },
      formattedDate() {
        return formatDate(this.content, this.format)
      },
    },
  }
  </script>
  