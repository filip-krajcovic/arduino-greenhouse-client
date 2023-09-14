<script setup lang="ts">
import Temperature from './Temperature.vue'
import Humidity from './Humidity.vue'
import SoilMoisture from './SoilMoisture.vue'
import Scheduler from './Scheduler.vue'
import Lights from './Lights.vue'
import Window from './Window.vue'

</script>

<template>
	<div class="grid grid-cols-2 gap-4 py-8">
		<Humidity />
		<Temperature />
	</div>
	<SoilMoisture />
	<div class="grid grid-cols-2 pt-4 pb-3">
		<Window />
		<Lights />
	</div>
	<Scheduler />
</template>