<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import IconHumidity from '@/icons/IconHumidity.vue';
import { ContentLoader } from 'vue-content-loader'
import { useDark } from '@vueuse/core'
import { computed } from 'vue';
import { useTimeAgo } from '@vueuse/core'

const isDark = useDark()
const primaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-primary)': undefined)
const secondaryColor = computed(() => isDark.value ? 'var(--vt-c-loader-secondary)': undefined)

const measurementsStore = useMeasurementsStore()

const { fetchLastHumidity } = measurementsStore

const { humidity } = storeToRefs(measurementsStore)

const timestamp = computed(() => {
  const d = humidity.value?.timestamp
  const r = d ? useTimeAgo(d) : undefined
  return r
})

if (!humidity.value) {
  fetchLastHumidity()
}

</script>

<template>
  <div class="flex py-2 flex-col border rounded-xl border-neutral-300 dark:bg-neutral-800 dark:border-neutral-800">
    <div class="flex items-center pl-2">
      <IconHumidity class="mr-2" />
      <div class="flex flex-col">
        <p class="font-bold text-sm text-black/70 dark:text-white font-black tracking-tighter">Vlhkosť vzduchu</p>
        <span v-if="timestamp?.value" class="text-xs text-neutral-400">{{ timestamp?.value }}</span>
        <ContentLoader v-else viewBox="0 0 95 20" class="h-5" :primaryColor="primaryColor" :secondaryColor="secondaryColor">
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
          </ContentLoader>
      </div>
    </div>
    <div class="flex justify-center py-3">
      <h1 v-if="humidity?.humidity" class="text-4xl text-black dark:text-white"> {{ humidity?.humidity }}%</h1>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-10" :primaryColor="primaryColor" :secondaryColor="secondaryColor">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
      </ContentLoader>
    </div>
  </div>
</template>