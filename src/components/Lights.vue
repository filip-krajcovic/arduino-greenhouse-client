<script setup lang="ts">
import { lightsActions, useLightsStore } from '@/stores/lights.store'
import { inject, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import InputSwitch from 'primevue/inputswitch'
import IconLights from '@/icons/IconLights.vue'
import { Topics } from '@/plugins/mqtt/mqtt.topics'

const { t } = useI18n()

const store = useLightsStore()

const { on: state } = storeToRefs(store)

const { lightsOn, lightsOff } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

watch(state, (value) => {
  console.log(value)
  if (value) {
    turnLightsOn()
  } else {
    turnLightsOff()
  }
})

const turnLightsOn = () => {
  mqtt?.publish(Topics.lights, lightsActions.on)
  lightsOn()
}

const turnLightsOff = () => {
  mqtt?.publish(Topics.lights, lightsActions.off)
  lightsOff()
}

const lightsStateDesc = (state: boolean) => {
  return state ? t('turnedOn') : t('turnedOff')
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <IconLights class="mr-2" />
      <h1 class="text-2xl text-black/70 dark:text-white font-bold">{{ $t('lights') }}</h1>
    </div>
      <InputSwitch v-model="state" />
    </div>
    <h3 v-if="state !== undefined" class="text-black/70 dark:text-neutral-200 font-extralight">{{ `${$t('lights')} ${$t('are')}` }}
      <span class="font-bold pt-1" :class="{ 'text-green-600': state, 'text-red-600': !state }">{{ lightsStateDesc(state) }}</span>
    </h3>

</template>
