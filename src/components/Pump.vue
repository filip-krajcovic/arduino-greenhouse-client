<script setup lang="ts">
import IconPump from '@/icons/IconPump.vue';
import { pumpActions, usePumpStore } from '@/stores/pump.store';
import { inject,computed,watch } from 'vue';
import { storeToRefs } from 'pinia'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import ToggleButton from 'primevue/togglebutton';
import { useTimeAgo } from '@vueuse/core'


const store = usePumpStore()

const { on: state, pumpStateDesc } = storeToRefs(store)

const { pumpOn, pumpOff  } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const turnPumpOn = () => {
	
  mqtt?.publish('arduino/pump', pumpActions.on)
  pumpOn()
}

const turnPumpOff = () => {

  mqtt?.publish('arduino/pump', pumpActions.off)
  pumpOff()
}
watch(state, (value) => {
  console.log(value)
  if(value){
    turnPumpOn()
  }
  else{
    turnPumpOff()
  }
})



</script>

<template>
    <div class="flex py-2 flex-col border rounded-xl border-neutral-300 dark:bg-neutral-800 dark:border-neutral-800">
        <div class="flex items-center pl-2">
            <IconPump class="mr-2 w-8 h-8" />
            <div class="flex flex-col">
                <p class="font-bold text-sm text-black/70 dark:text-white font-black tracking-tighter">Zavlažovanie</p>
                <span class="text-xs text-neutral-400">2 days ago</span>
            </div>
        </div>
        <div class="card flex justify-center rounded-full mt-3">
            <ToggleButton v-model="state" offLabel="Zapnúť" onLabel="Vypnúť"/>
        </div>
    </div>
    
      
</template>