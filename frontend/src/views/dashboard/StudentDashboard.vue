<template>
 <custom-title icon="mdi-lightbulb-on">
    <span class="d-inline-block capitalize-first-letter">Dashboard</span>
  </custom-title>
  <v-card class="px-0">
      <score-cart/>
  </v-card>
</template>

<script setup>
import ScoreCart from "@/components/dashboard/ScoreCart.vue"
</script>