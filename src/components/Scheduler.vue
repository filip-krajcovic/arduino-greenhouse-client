<script setup lang="ts">
import { ref, watch, inject } from 'vue';
import { useTimerStore } from '@/stores/timer.store';
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'

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
	<div class="mt-10 flex flex-col">
		<div>
			<label>Čas zapnutia svetiel : </label> 
			<input type="text" class="w-16" v-model.lazy="timeOn" />
			<div v-if="hourOn && minuteOn">
			</div>
		</div>
		<div class="pt-2">
			<label>Čas vypnutia svetiel : </label> 
			<input type="text" class="w-16" v-model.lazy="timeOff"/>
			<div v-if="hourOff && minuteOff">
			</div> 
			<button class="border" @click="saveData">Save</button>
		</div>
	</div>



<!--
  <div class="pt-4">
		<h1 class="text-2xl text-black/70 dark:text-white font-bold">Harmonogram</h1>
	</div>
	<div class="grid grid-cols-2 pt-4 ">
		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 dark:text-white pb-2">Zapnúť</h3>
			<input class="text-black/70 dark:text-white text-2xl rounded-2xl bg-neutral-300 dark:bg-neutral-800 px-4 py-1 " type="time" value="00:00">
		</div>

		<div class="flex flex-col">
			<h3 class="text-xl text-black/70 dark:text-white pb-2">Vypnúť</h3>
			<input class="text-black/70 dark:text-white text-2xl bg-neutral-300 dark:bg-neutral-800 rounded-2xl px-4 py-1" type="time" value="00:00" min="0" max="23" >
		</div>
	</div>
-->
</template>
	