<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    :rounded="rounded"
    :disabled="disabled"
    @click="handleClick"
  >
    <v-icon left v-if="icon">{{ icon }}</v-icon>
    {{ buttonText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      // Handle button click event here
      this.$emit('click')
    }
  }
}
</script>
