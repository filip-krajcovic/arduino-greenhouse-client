<script setup lang="ts">
import { useMeasurementsStore, getDate } from '@/stores/measurements'

const { measurements } = useMeasurementsStore()

</script>

<template>
  <h1 class="pl-4 py-4 text-xl font-bold">Zoznam meraní:</h1>
  <div class="grid grid-cols-1 gap-4 px-4 pb-8">
    <div v-for="(item, index) in measurements" :key="item.id" class="p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
      <div>{{ measurements.length - index }}.</div>
      <div>
        Dátum a čas merania:
        <b>{{ getDate(item.timestamp.seconds).toLocaleString('sk-SK') }}</b>
      </div>
      <div>Teplota: <b>{{ item.temperature }} °C</b></div>
      <div>Vlhkosť vzduchu: <b>{{ item.humidity }} %</b></div>
      <div>Vlhkosť pôdy: <b>{{ item.moisure_soil }} %</b></div>
    </div>
  </div>
</template>