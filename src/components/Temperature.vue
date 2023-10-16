<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia'
import IconTemperature from '@/icons/IconTemperature.vue'
import { ContentLoader } from 'vue-content-loader'
import { useDark } from '@vueuse/core'
import { computed } from 'vue';

const isDark = useDark()
const primaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-primary)': undefined)
const secondaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-secondary)': undefined)

const measurementsStore = useMeasurementsStore()

const { fetchLastTemperature } = measurementsStore

const { temperature } = storeToRefs(measurementsStore)

if (!temperature.value) {
  fetchLastTemperature()
}

</script>

<template>
  <div class="flex justify-center pb-4 pt-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl dark:shadow-slate-300">
    <div class="flex flex-col items-center">
      <IconTemperature />
      <h1 class="font-bold py-2 text-lg text-black/70 dark:text-white">Teplota vzduchu</h1>
      <p v-if="temperature" class="text-sm text-black/40 dark:text-slate-200">Teplota: {{ temperature.temperature }}°C</p>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-5" :primaryColor="primaryColor" :secondaryColor="secondaryColor">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    </div>
  </div>
</template>