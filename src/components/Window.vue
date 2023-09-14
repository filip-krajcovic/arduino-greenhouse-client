<script setup lang="ts">
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import { useWindowStore, windowActions } from '@/stores/window.store';
import { storeToRefs } from 'pinia'
import { inject } from 'vue';

const store = useWindowStore()

const { opened: state, windowStateDesc } = storeToRefs(store)

const { windowOpen, windowClose } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const openWindow = () => {
	mqtt?.publish('window', windowActions.open)
	windowOpen()
}

const closeWindow = () => {
	mqtt?.publish('window', windowActions.close)
	windowClose()
}

</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl text-black/70 dark:text-white font-bold pb-2">Pohyb okna</h1>
    <div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
      <button @click="closeWindow()" type="button" class="bg-gray-300 dark:bg-cyan-800 rounded-l-lg py-3 px-3 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white">Zatvoriť</button>
      <button @click="openWindow()" type="button"
        class="bg-gray-300 dark:bg-cyan-800 rounded-r-lg py-3 px-3 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white">Otvoriť</button>
    </div>
    <h3 v-if="state !== undefined" class="text-black/70 dark:text-slate-200 font-extralight pt-3">Okno je 
      <span class="font-bold pt-1" :class="{'text-green-600': state, 'text-red-600': !state }">{{ windowStateDesc }}</span>
    </h3>
  </div>
</template>