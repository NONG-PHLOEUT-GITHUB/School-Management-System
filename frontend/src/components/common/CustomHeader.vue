<template>
  <v-card
    :color="bgColor"
    class="card-header d-flex align-center pt-6"
    :class="[
      textColor === 'white' ? 'text-white' : 'text-dark-blue',
      isViewForm ? 'elevation-4' : 'elevation-0'
    ]"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'CustomHeader',
  props: {
    bgColor: String,
    textColor: String,
    isViewForm: Boolean
  }
}
</script>

<style scoped>
.card-header {
  font-weight: 500 !important;
  font-size: 20px;
  padding: 10px 0 10px 20px;
}
.card-header.text-white {
  color: white;
}
.card-header.text-dark-blue {
  color: var(--v-primary-base);
}
</style>
