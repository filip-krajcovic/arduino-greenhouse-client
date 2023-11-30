<script setup lang="ts">
import Temperature from './Temperature.vue'
import Humidity from './Humidity.vue'
import SoilMoisture from './SoilMoisture.vue'
import Scheduler from './Scheduler.vue'
import Lights from './Lights.vue'
import Window from './Window.vue'

</script>

<template>
	<div class="grid grid-cols-2 grid-rows-2 gap-3 py-8">
		<Temperature />
		<Humidity />
		<SoilMoisture />
	</div>
	<div class="grid grid-cols-2 py-4">
		<Window />
		<Lights />
	</div>
</template>