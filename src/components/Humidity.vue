<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import IconHumidity from '@/icons/IconHumidity.vue';
import { ContentLoader } from 'vue-content-loader'

const measurementsStore = useMeasurementsStore()

const { fetchLastHumidity } = measurementsStore

const { humidity } = storeToRefs(measurementsStore)

if (!humidity.value) {
  fetchLastHumidity()
}

</script>

<template>
  <div class="flex justify-center items-center shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl dark:shadow-slate-300">
    <div class="flex flex-col items-center">
      <IconHumidity />
      <h1 class="font-bold text-lg py-2 text-black/70 dark:text-white">Vlhkosť vzduchu</h1>
      <p v-if="humidity" class="text-sm text-green-600/95 dark:text-slate-200">Vlhkosť: {{ humidity }}%</p>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-5">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    </div>
  </div>
</template>