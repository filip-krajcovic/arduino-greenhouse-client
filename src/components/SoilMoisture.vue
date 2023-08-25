<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';

const measurementsStore = useMeasurementsStore()

const { fetchLastSoilMoisture } = measurementsStore

const { soilMoisture } = storeToRefs(measurementsStore)

if (!soilMoisture.value) {
  fetchLastSoilMoisture()
}

</script>

<template>
  <div class="pt-3 pb-3">
    <h1 class="text-2xl text-black/70 font-bold">Snímač vlhkosti pôdy</h1>
    <h3 class="text-lg pt-2 text-black/70 ">Vlhkosť pôdy je <span class="font-medium text-green-600/95"> {{ soilMoisture }}%</span></h3>
  </div>
</template>