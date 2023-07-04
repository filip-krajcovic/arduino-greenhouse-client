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
  <div class="grid grid-cols-2 gap-4 px-4 py-8">
		<div class="flex justify-center items-center shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="-5 -2 24 24"><path fill="#3259a8" d="M2 13a5 5 0 0 0 10 0c0-1.726-1.66-5.031-5-9.653C3.66 7.969 2 11.274 2 13zM7 0c4.667 6.09 7 10.423 7 13a7 7 0 0 1-14 0c0-2.577 2.333-6.91 7-13z"/></svg>
					<h1 class=" font-extrabold pt-2 text-black/70">Vlhkosť vzduchu</h1>
					<p class="text-xs pt-2 text-green-600/95">Teplota: {{ temperature }}°C</p>
				</div>
			</div>
			<div class="flex justify-center pb-4 pt-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.15)] rounded-2xl">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ed2926" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1Z"/></svg>
					<h1 class="text-base font-bold pt-2 text-center text-black/70">Teplota vzduchu</h1>
					<p class="text-xs pt-2 text-black/40">Vlhkosť: {{ humidity }}%</p>
				</div>
			</div>
		</div>
  <p class="">Teplota vzduchu {{ temperature }}°C</p>
  <p>Vlhkosť {{ humidity }}%</p>
  <p>Vlhkost pôdy {{ moisure_soil }}%</p>
</template>