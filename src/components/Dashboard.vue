<script setup lang="ts">
import { useMeasurementsStore } from '@/stores/measurements'
import { computed } from 'vue';
import IconHumidity from '@/icons/IconHumidity.vue';
import IconTemperature from '@/icons/IconTemperature.vue';

const { measurements } = useMeasurementsStore()

const lastValue = computed(() => measurements.value[0])

const temperature = computed(() => lastValue?.value?.temperature)
const humidity = computed(() => lastValue?.value?.humidity)
const moisure_soil = computed(() => lastValue?.value?.moisure_soil)

</script>

<template>
  <div class="grid grid-cols-2 gap-4 px-4 py-8">
		<div class="flex justify-center items-center shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
          <IconHumidity/>
					<h1 class=" font-extrabold pt-2 text-black/70">Vlhkosť vzduchu</h1>
					<p class="text-xs pt-2 text-green-600/95">Teplota: {{ temperature }}°C</p>
				</div>
			</div>
			<div class="flex justify-center pb-4 pt-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
          <IconTemperature/>
					<h1 class="text-base font-bold pt-2 text-center text-black/70">Teplota vzduchu</h1>
					<p class="text-xs pt-2 text-black/40">Vlhkosť: {{ humidity }}%</p>
				</div>
			</div>
		</div>
    <div class="pl-4 pt-3">
      <h1 class="text-2xl text-black/70 font-bold">Snímač vlhkosti pôdy</h1>
      <h3 class="text-lg pt-2 text-black/70 ">Vlhkosť pôdy je <span class="font-medium text-green-600/95"> {{ moisure_soil }}%</span></h3>
	  </div>




</template>