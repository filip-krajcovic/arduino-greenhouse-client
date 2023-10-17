<script setup lang="ts">
import { lightsActions, useLightsStore } from '@/stores/lights.store';
import { inject } from 'vue';
import { storeToRefs } from 'pinia'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'



const store = useLightsStore()

const { on: state, lightsStateDesc } = storeToRefs(store)

const { lightsOn, lightsOff  } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const turnLightsOn = () => {
	
  mqtt?.publish('arduino/lights', lightsActions.on)
  lightsOn()
}

const turnLightsOff = () => {

  mqtt?.publish('arduino/lights', lightsActions.off)
  lightsOff()
}

</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl text-black/70 dark:text-white font-bold pb-2">Svetlá</h1>
    <div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
      <button @click="turnLightsOff()" class="bg-neutral-300 dark:bg-neutral-800 rounded-l-lg py-3 px-3 dark:hover:bg-red-500  hover:text-white  hover:bg-red-500">Vypnúť</button>
      <button @click="turnLightsOn()" type="button" class="bg-neutral-300 dark:bg-neutral-800 rounded-r-lg py-3 px-3 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white">Zapnúť</button>
    </div>
    <h3 v-if="state !== undefined" class="text-black/70 dark:text-neutral-200 font-extralight pt-3"> Svetlá sú
      <span class="font-bold pt-1" :class="{'text-green-600': state, 'text-red-600': !state }">{{ lightsStateDesc }}</span>
    </h3>
  </div>
</template>