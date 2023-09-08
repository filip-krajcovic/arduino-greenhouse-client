<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia'
import { ContentLoader } from 'vue-content-loader'
import { useDark } from '@vueuse/core'
import { computed } from 'vue';

const isDark = useDark()
const primaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-primary)': undefined)
const secondaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-secondary)': undefined)

const measurementsStore = useMeasurementsStore()

const { fetchLastSoilMoisture } = measurementsStore

const { soilMoisture } = storeToRefs(measurementsStore)

if (!soilMoisture.value) {
  fetchLastSoilMoisture()
}

</script>

<template>
  <div class="pt-3 pb-3">
    <h1 class="text-2xl text-black/70 font-bold dark:text-white">Snímač vlhkosti pôdy</h1>
    <h3 class="text-lg pt-2 text-black/70 dark:text-slate-200">Vlhkosť pôdy je 
      <span v-if="soilMoisture" class="font-medium text-green-600/95 dark:text-green-300/95"> {{ soilMoisture }}%</span>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-5 inline" :primaryColor="primaryColor" :secondaryColor="secondaryColor">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    </h3>
  </div>
</template>