<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';
import { ContentLoader } from 'vue-content-loader'

const measurementsStore = useMeasurementsStore()

const { fetchMeasurements } = measurementsStore;

const { measurements } = storeToRefs(measurementsStore)

fetchMeasurements()

</script>

<template>
  <h1 class="pl-4 py-4 text-xl font-bold">Zoznam meraní:</h1>
  <div class="grid grid-cols-1 gap-4 px-4 pb-8">
    <div v-if="measurements && measurements.length > 0" v-for="(item, index) in measurements" class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
      <div>{{ measurements.length - index }}.</div>
      <div>
        Dátum a čas merania:
        <b>{{ new Date(item.timestamp).toLocaleString('sk-SK') }}</b>
      </div>
      <div v-if="item.temperature">Teplota: <b>{{ item.temperature }} °C</b></div>
      <div v-if="item.humidity">Vlhkosť vzduchu: <b>{{ item.humidity }} %</b></div>
      <div v-if="item.soilMoisture">Vlhkosť pôdy: <b>{{ item.soilMoisture }} %</b></div>
    </div>
    <div v-else v-for="item in 10" class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
      <ContentLoader viewBox="0 0 250 50">
        <rect x="0" y="0" rx="3" ry="3" width="20" height="10" />
        <rect x="0" y="20" rx="3" ry="3" width="250" height="10" />
        <rect x="0" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    </div>
  </div>
</template>@/stores/measurements.store