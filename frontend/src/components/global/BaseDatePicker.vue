<template>
  <v-menu>
    <template v-slot:activator="{ props: activatorProps }">
      <v-text-field
        ref="activator"
        :label="label"
        :modelValue="content"
        :rules="rules"
        :placeholder="placeholder"
        @click:clear="content = null"
        prepend-inner-icon="mdi-calendar-blank-outline"
        clearable
        v-bind="activatorProps"
        v-on="on"
        @click="showDatePicker = !showDatePicker"
      ></v-text-field>
    </template>
    <v-date-picker
      v-if="showDatePicker"
      v-model="content"
      @input="deactivate"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    rules: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const showDatePicker = ref(false)
    const content = ref(props.value)

    const updateContent = (value) => {
      content.value = value
      emit('update:modelValue', value)
    }

    return {
      showDatePicker,
      content,
      updateContent
    }
  }
}
</script>
