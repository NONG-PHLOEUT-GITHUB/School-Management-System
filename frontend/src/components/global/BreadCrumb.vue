<template>
  <v-breadcrumbs :items="pathTitles" class="pa-0">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  props: {
    pathTitles: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>
/* Set position: relative on breadcrumbs to solve issue with breadcrumb is difficult to click because of content is overlay on it */
.v-breadcrumbs {
  position: relative;
}
.v-breadcrumbs >>> a {
  color: var(--v-info-base);
  cursor: pointer;
  display: inline-block;
}
.v-breadcrumbs >>> li:last-child .v-breadcrumbs__item {
  display: inline-block;
}
.v-breadcrumbs >>> a:first-letter,
.v-breadcrumbs >>> li:last-child .v-breadcrumbs__item:first-letter {
  text-transform: uppercase;
}
.v-breadcrumbs >>> li:last-child {
  color: var(--v-neutral-base);
  cursor: default;
}
</style>
