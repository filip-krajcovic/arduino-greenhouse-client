<script setup lang="ts">
import Temperature from './Temperature.vue'
import Humidity from './Humidity.vue'
import SoilMoisture from './SoilMoisture.vue'
import Scheduler from './Scheduler.vue'
import Lights from './Lights.vue'
import Window from './Window.vue'

</script>

<template>
	<div class="grid grid-cols-2 gap-3 py-8">
		<Temperature />
		<Humidity />
	</div>
	<SoilMoisture />
	<div class="grid grid-cols-2 py-4">
		<Window />
		<Lights />
	</div>
		<Scheduler/>
</template>