<script setup lang="ts">
import Temperature from './Temperature.vue';
import Humidity from './Humidity.vue'
import SoilMoisture from './SoilMoisture.vue'

</script>

<template>
	<div class="grid grid-cols-2 gap-4 py-8">
		<Humidity />
		<Temperature />
	</div>
	<SoilMoisture />
	<div class="grid grid-cols-2 pt-4 pb-3">
		<div class="flex flex-col">
			<h1 class="text-2xl text-black/70 font-bold pb-2">Pohyb okna</h1>
			<div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
				<button class="bg-gray-300 rounded-l-lg py-3 px-3 hover:bg-red-500 hover:text-white">Zatvoriť</button>
				<button type="button"
					class="bg-gray-300 rounded-r-lg py-3 px-3 hover:bg-green-600 hover:text-white">Otvoriť</button>
			</div>
			<h3 class="text-black/70 font-extralight pt-3">Okno je <span class="text-red-600 font-bold pt-1">zatvorené</span>
			</h3>
		</div>
		<div class="flex flex-col">
			<h1 class="text-2xl text-black/70 font-bold pb-2">Svetlá</h1>
			<div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
				<button class="bg-gray-300 rounded-l-lg  py-3 px-3 hover:bg-red-500 hover:text-white">Vypnúť</button>
				<button type="button"
					class="bg-gray-300 rounded-r-lg py-3 px-3 hover:bg-green-600 hover:text-white">Zapnúť</button>
			</div>
			<h3 class="text-black/70 font-extralight pt-3">Svetlá sú <span class="text-green-600 font-bold pt-1"> zapnuté</span>
			</h3>
		</div>
	</div>
	<div class="pt-4">
		<h1 class="text-2xl text-black/70 font-bold">Harmonogram</h1>
	</div>
	<div class="grid grid-cols-2 pt-4 ">
		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 pb-2">Zapnúť</h3>
			<input class="text-black/70 text-2xl rounded-2xl bg-gray-300 px-4 py-1 " type="time" value="00:00">
		</div>

		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 pb-2">Vypnúť</h3>
			<input class="text-black/70 text-2xl bg-gray-300 rounded-2xl px-4 py-1" type="time" value="00:00">
		</div>
	</div>
</template>