<template>
  <v-row
    v-if="isLoading && !forceStopLoading"
    class="overlay text-center"
    align="center"
    no-gutters
  >
    <v-col>
      <div class="text-subtitle-2 font-weight-medium text-uppercase">
        {{ message }}
      </div>
      <v-progress-circular
        color="primary"
        size="90"
        width="6"
        class="my-4"
        :indeterminate="true"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLoadingStore } from '@/stores/loading' // Update the path accordingly

const loadingStore = useLoadingStore()

const isLoading = ref()
const forceStopLoading = ref()
const message = ref()

watch(() => {
  isLoading.value = loadingStore.isLoading
  forceStopLoading.value = loadingStore.forceStopLoading
  message.value = loadingStore.message
})
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(250, 250, 250, 0.5);
  top: 0;
  left: 0;
}
</style>
