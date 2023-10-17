<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import IconHumidity from '@/icons/IconHumidity.vue';
import { ContentLoader } from 'vue-content-loader'
import { useDark } from '@vueuse/core'
import { computed } from 'vue';

const isDark = useDark()
const primaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-primary)': undefined)
const secondaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-secondary)': undefined)

const measurementsStore = useMeasurementsStore()

const { fetchLastHumidity } = measurementsStore

const { humidity } = storeToRefs(measurementsStore)

if (!humidity.value) {
  fetchLastHumidity()
}

</script>

<template>
  <div class="flex py-2 flex-col border rounded-xl border-slate-300">
    <div class="flex items-center pl-2">
      <IconHumidity class="mr-2" />
      <div class="flex flex-col">
        <p class="font-bold text-sm text-black/70 dark:text-white font-black tracking-tighter">Vlhkosť vzduchu</p>
        <span class="text-xs text-slate-400">1 minute ago</span>
      </div>
    </div>
    <div class="flex justify-center py-3">
      <h1 v-if="humidity" class="text-4xl text-black font-bold dark:text-white"> {{ humidity }}%</h1>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-5" :primaryColor="primaryColor" :secondaryColor="secondaryColor">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    </div>
  </div>
</template>