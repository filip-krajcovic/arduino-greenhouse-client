<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia'
import { ContentLoader } from 'vue-content-loader'

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
    <h3 class="text-lg pt-2 text-black/70 ">Vlhkosť pôdy je 
      <span v-if="soilMoisture" class="font-medium text-green-600/95"> {{ soilMoisture }}%</span>
      <ContentLoader v-else viewBox="0 0 80 20" class="h-5 inline">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="20" />
      </ContentLoader>
    </h3>
  </div>
</template>