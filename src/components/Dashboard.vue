<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements'
import { computed } from 'vue';

const { measurements } = useMeasurementsStore()

const lastValue = computed(() => measurements.value[0])

const temperature = computed(() => lastValue?.value?.temperature)
const humidity = computed(() => lastValue?.value?.humidity)
const moisure_soil = computed(() => lastValue?.value?.moisure_soil)

</script>

<template>
  <p>Teplota vzduchu {{ temperature }}°C</p>
  <p>Vlhkost vzduchu {{ humidity }}%</p>
  <p>Vlhkost pôdy {{ moisure_soil }}%</p>
</template>