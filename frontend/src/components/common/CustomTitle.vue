<template>
  <v-card
    class="custom-title-wrapper d-flex justify-space-between py-2 elevation-0"
    color="transparent"
  >
    <div
      class="header-title-wrapper d-flex align-center"
      :class="{ 'justify-center': centeredTitle }"
    >
      <h3 class="primary--text d-flex align-center">
        <v-icon class="mr-2" v-if="icon">
          {{ icon }}
        </v-icon>
        <slot />
      </h3>
    </div>
    <div class="d-flex align-center">
      <slot name="right">
        <v-btn v-if="rightIcon" small icon class="white">
          <v-icon small>
            {{ rightIcon }}
          </v-icon>
        </v-btn>
      </slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CustomTitle',
  props: {
    icon: { type: String, required: false },
    rightIcon: { type: String },
    centeredTitle: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.custom-title-wrapper {
  height: 65px;
}
.header-title-wrapper {
  width: 100%;
}
</style>
