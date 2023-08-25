<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import IconTemperature from '@/icons/IconTemperature.vue';

const measurementsStore = useMeasurementsStore()

const { fetchLastTemperature } = measurementsStore

const { temperature } = storeToRefs(measurementsStore)

if (!temperature.value) {
  fetchLastTemperature()
}

</script>

<template>
  <div class="flex justify-center pb-4 pt-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
    <div class="flex flex-col items-center">
      <IconTemperature />
      <h1 class="font-bold pt-2 text-lg text-black/70">Teplota vzduchu</h1>
      <p class="text-sm pt-2 text-black/40">Teplota: {{ temperature }}°C</p>
    </div>
  </div>
</template>