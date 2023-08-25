<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia';

const measurementsStore = useMeasurementsStore()

const { fetchMeasurements } = measurementsStore;

const { measurements } = storeToRefs(measurementsStore)

fetchMeasurements()

</script>

<template>
  <h1 class="pl-4 py-4 text-xl font-bold">Zoznam meraní:</h1>
  <div class="grid grid-cols-1 gap-4 px-4 pb-8">
    <div v-for="(item, index) in measurements" class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
      <div>{{ measurements.length - index }}.</div>
      <div>
        Dátum a čas merania:
        <b>{{ new Date(item.timestamp).toLocaleString('sk-SK') }}</b>
      </div>
      <div v-if="item.temperature">Teplota: <b>{{ item.temperature }} °C</b></div>
      <div v-if="item.humidity">Vlhkosť vzduchu: <b>{{ item.humidity }} %</b></div>
      <div v-if="item.soilMoisture">Vlhkosť pôdy: <b>{{ item.soilMoisture }} %</b></div>
    </div>
  </div>
</template>@/stores/measurements.store