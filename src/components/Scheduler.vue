<script setup lang="ts">
import { ref, watch, inject } from 'vue';
import { useTimerStore } from '@/stores/timer.store';
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import Button from 'primevue/button';

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)


const timeOn = ref();
const timeOff = ref();

const hourOn = ref();
const minuteOn = ref();
const hourOff = ref();
const minuteOff = ref();

watch(timeOn, (value: string) => {
	console.log(value);
	const tokens = value.split(':');
	if (tokens.length === 2) {
		hourOn.value = tokens[0]
		minuteOn.value = tokens[1]
	}
})
watch(timeOff, (value: string) => {
	console.log(value);
	const tokens = value.split (':');
	if(tokens.length == 2){
		hourOff.value = tokens[0]
		minuteOff.value = tokens[1]
	}
})

const { save, read } = useTimerStore() ;

const storeData = read();

if (storeData) {
	hourOn.value = storeData.hourOn
	minuteOn.value = storeData.minuteOn
	hourOff.value = storeData.hourOff
	minuteOff.value = storeData.minuteOff
	if (hourOn.value && minuteOn.value){
		timeOn.value = hourOn.value + ':' + minuteOn.value
	}
	if (hourOff.value && minuteOff.value){
		timeOff.value = hourOff.value + ':' + minuteOff.value
	}
}

const saveData = () => {
	save(hourOn.value, minuteOn.value, hourOff.value, minuteOff.value )
	mqtt?.publish('arduino/timer', JSON.stringify(read()))
}

</script>

<template>
	<div class="flex justify-between">
		<h1 class="pt-10 text-2xl">Harmonogram</h1>
	</div>
	<div class="grid grid-cols-2 gap-3 py-8">
		<div class="flex flex-col">
			<label class="text-xl">Čas zapnutia </label> 
			<input type="text" class="w-12 text-lg dark:bg-black mt-2" v-model.lazy="timeOn" />
			<div v-if="hourOn && minuteOn">
			</div>
		</div>
		<div class="flex flex-col">
			<label class="text-xl">Čas vypnutia </label> 
			<input type="text" class="w-12 text-lg dark:bg-black mt-2 " v-model.lazy="timeOff" />
			<div v-if="hourOff && minuteOff">
			</div>
		</div>
	</div>
	<div class="pt-4 flex">
		<div v-if="hourOn && minuteOn">
			Svetlá budú zapnuté od <span class=" text-cyan-800 font-semibold mr-1"> {{ hourOn }}:{{ minuteOn }}</span>
		</div>
		<div v-if="hourOff && minuteOff">
			a zhasnú o <span class="text-cyan-800 font-semibold">{{ hourOff }}:{{ minuteOff }}</span>
		</div>
	</div>
	<div class="flex items-center mt-4">
      <button @click="saveData" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">Uložiť</button>
    </div>
</template>