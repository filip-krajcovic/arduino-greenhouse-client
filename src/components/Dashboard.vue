<script setup lang="ts">
import { inject } from 'vue'
import Temperature from './Temperature.vue'
import Humidity from './Humidity.vue'
import SoilMoisture from './SoilMoisture.vue'
import Scheduler from './Scheduler.vue'
import Lights from './Lights.vue'
import Window from './Window.vue'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const toggleWindow = (state: string) => {
	mqtt?.publish('window', state)
}

const turnLights = (state: string) => {
	mqtt?.publish('lights', state)
}

</script>

<template>
	<div class="grid grid-cols-2 gap-4 py-8">
		<Humidity />
		<Temperature />
	</div>
	<SoilMoisture />
	<div class="grid grid-cols-2 pt-4 pb-3">
		<Window @open-window="toggleWindow('open')" @close-window="toggleWindow('close')"/>
		<Lights @lights-turn-on="turnLights('on')" @lights-turn-off="turnLights('off')"/>
	</div>
	<Scheduler />
</template>