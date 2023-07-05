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
  <div class="grid grid-cols-2 gap-4 py-8">
		<div class="flex justify-center items-center shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
          <IconHumidity/>
					<h1 class="font-bold text-lg pt-2 text-black/70">Vlhkosť vzduchu</h1>
					<p class="text-sm pt-2 text-green-600/95">Teplota: {{ temperature }}°C</p>
				</div>
			</div>
			<div class="flex justify-center pb-4 pt-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
          <IconTemperature/>
					<h1 class="font-bold pt-2 text-lg text-black/70">Teplota vzduchu</h1>
					<p class="text-sm pt-2 text-black/40">Vlhkosť: {{ humidity }}%</p>
				</div>
			</div>
		</div>
    <div class="pt-3 pb-4">
      <h1 class="text-2xl text-black/70 font-bold">Snímač vlhkosti pôdy</h1>
      <h3 class="text-lg pt-2 text-black/70 ">Vlhkosť pôdy je <span class="font-medium text-green-600/95"> {{ moisure_soil }}%</span></h3>
	</div>
	<div class="grid grid-cols-2 gap-8 pt-3 ">
		<div class="flex flex-col">
			<h1 class="text-2xl text-black/70 font-bold pb-2">Pohyb okna</h1>				
			<div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
				<button class="bg-gray-300 rounded-l-lg py-3 px-3 hover:bg-red-500 hover:text-white">Zatvoriť</button>
				<button type="button" class="bg-gray-300 rounded-r-lg py-3 px-3 hover:bg-green-600 hover:text-white">Otvoriť</button>
			</div>
			<h3 class="text-black/70 font-extralight pt-3">Okno je <span class="text-red-600 font-bold pt-1">zatvorené</span></h3>
		</div>
		<div class="flex flex-col">
			<h1 class="text-2xl text-black/70 font-bold pb-2">Svetlá</h1>
			<div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
				<button class="bg-gray-300 rounded-l-lg  py-3 px-3 hover:bg-red-500 hover:text-white">Vypnúť</button>
				<button type="button" class="bg-gray-300 rounded-r-lg py-3 px-3 hover:bg-green-600 hover:text-white">Zapnúť</button>
			</div>
			<h3 class="text-black/70 font-extralight pt-3">Svetlá sú <span class="text-green-600 font-bold pt-1"> zapnuté</span></h3>

		</div>
	</div>




</template>