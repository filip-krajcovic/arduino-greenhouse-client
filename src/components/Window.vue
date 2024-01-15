<script setup lang="ts">
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import { useWindowStore, windowActions } from '@/stores/window.store';
import IconWindow from '@/icons/IconWindow.vue';
import InputSwitch from 'primevue/inputswitch';
import { storeToRefs } from 'pinia'
import { inject,watch } from 'vue';


const store = useWindowStore()

const { opened: state, windowStateDesc } = storeToRefs(store)

const { windowOpen, windowClose } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const openWindow = () => {
	mqtt?.publish('arduino/window', windowActions.open)
	windowOpen()
}

const closeWindow = () => {
	mqtt?.publish('arduino/window', windowActions.close)
	windowClose()
}
watch(state, (value) => {
  console.log(value)
  if(value){
    openWindow()
  }
  else{
    closeWindow()
  }
})

</script>

<template>
  <div>
    <h1 class="text-2xl text-black/70 dark:text-white font-bold">Okno</h1>
    <div class="card flex items-end justify-between">
        <div class="flex items-end">
          <IconWindow class="mr-2" />
          <h3 v-if="state !== undefined" class="text-black/70 dark:text-neutral-200 font-extralight pt-3"> Okno je
            <span class="font-bold pt-1" :class="{'text-green-600': state, 'text-red-600': !state }">{{ windowStateDesc }}</span>
          </h3>
        </div>
        <InputSwitch v-model="state" />
    </div>
  </div>

</template>

<!--
<template>
  <div class="flex flex-col">
    <h1 class="text-2xl text-black/70 dark:text-white font-bold pb-2">Pohyb okna</h1>
    <div class="inline-flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] pt-2">
      <button @click="closeWindow()" type="button" class="bg-neutral-300 dark:bg-neutral-800 rounded-l-lg py-3 px-3 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white">Zatvoriť</button>
      <button @click="openWindow()" type="button" class="bg-neutral-300 dark:bg-neutral-800 rounded-r-lg py-3 px-3 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white">Otvoriť</button>
    </div>
    <h3 v-if="state !== undefined" class="text-black/70 dark:text-neutral-200 font-extralight pt-3">Okno je 
      <span class="font-bold pt-1" :class="{'text-green-600': state, 'text-red-600': !state }">{{ windowStateDesc }}</span>
    </h3>
  </div>
</template>
-->