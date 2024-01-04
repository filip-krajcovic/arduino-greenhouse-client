<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia'
import IconTemperature from '@/icons/IconTemperature.vue'
import { computed } from 'vue';
import { useTimeAgo } from '@vueuse/core'
import Skeleton from 'primevue/skeleton'

const measurementsStore = useMeasurementsStore()

const { fetchLastTemperature } = measurementsStore

const { temperature } = storeToRefs(measurementsStore)

const timestamp = computed(() => {
  const d = temperature.value?.timestamp
  const r = d ? useTimeAgo(d) : undefined
  return r
})

if (!temperature.value) {
  fetchLastTemperature()
}

</script>

<template>
  <div class="flex py-2 flex-col border rounded-xl border-neutral-300 dark:bg-neutral-800 dark:border-neutral-800">
      <div class="flex items-center pl-2">
        <IconTemperature class="mr-2" />
        <div class="flex flex-col">
          <p class="font-bold text-sm text-black/70 dark:text-white font-black tracking-tighter">Teplota vzduchu</p>
          <span v-if="timestamp?.value" class="h-5 text-xs text-neutral-400">{{ timestamp?.value }}</span>
          <Skeleton v-else height="1rem" />
        </div>  
      </div>
      <div class="flex justify-center py-3">
        <h1 v-if="temperature?.temperature" class="text-4xl text-black dark:text-white">{{ temperature?.temperature }}°C</h1>
        <Skeleton v-else height="2.5rem" width="5rem"/>
      </div>
    </div>
</template>