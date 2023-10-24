<template>
  <header-component></header-component>
  <v-tooltip text="Tooltip">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props">Tooltip</v-btn>
  </template>
</v-tooltip>
</template>
