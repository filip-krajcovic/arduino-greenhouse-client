<script setup lang="ts">
import IconPump from '@/icons/IconPump.vue'
import { pumpActions, usePumpStore } from '@/stores/pump.store'
import { inject, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import IconPower from '@/icons/IconPower.vue'
import TimeAgo from './TimeAgo.vue'
import { Topics } from '@/plugins/mqtt/mqtt.topics'

const store = usePumpStore()

const { on: state, lastState } = storeToRefs(store)

const { pumpOn, pumpOff, fetchLastPumpActivity } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const turnPumpOn = () => {
  mqtt?.publish(Topics.pump, pumpActions.on)
  pumpOn()
}

const turnPumpOff = () => {
  mqtt?.publish(Topics.pump, pumpActions.off)
  pumpOff()
}
watch(state, (value) => {
  if (value) {
    turnPumpOn()
  } else {
    turnPumpOff()
  }
})

const toggleState = () => (state.value = !state.value)

if (!lastState.value) {
  fetchLastPumpActivity()
}
</script>

<template>
  <div
    class="flex py-2 flex-col border rounded-xl border-neutral-300 dark:bg-neutral-800 dark:border-neutral-800"
  >
    <div class="flex items-center pl-2">
      <IconPump class="mr-2 w-8 h-8" />
      <div class="flex flex-col">
        <p class="font-bold text-sm text-black/70 dark:text-white font-black tracking-tighter">
          {{ $t('watering') }}
        </p>
        <TimeAgo
          v-if="lastState?.timestamp"
          :datetime="lastState?.timestamp"
          class="h-5 text-xs text-neutral-400"
        />
        <Skeleton v-else height="1.25rem" />
      </div>
    </div>
    <div class="card flex justify-center rounded-full mt-3">
      <button class="rounded-full" :class="{ active: state }" @click="toggleState">
        <IconPower />
      </button>
    </div>
  </div>
</template>
