<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import IconHumidity from '@/icons/IconHumidity.vue';

const measurementsStore = useMeasurementsStore()

const { fetchLastHumidity } = measurementsStore

const { humidity } = storeToRefs(measurementsStore)

if (!humidity.value) {
  fetchLastHumidity()
}

</script>

<template>
  <div class="flex justify-center items-center shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
    <div class="flex flex-col items-center">
      <IconHumidity />
      <h1 class="font-bold text-lg pt-2 text-black/70">Vlhkosť vzduchu</h1>
      <p class="text-sm pt-2 text-green-600/95">Vlhkosť: {{ humidity }}%</p>
    </div>
  </div>
</template>