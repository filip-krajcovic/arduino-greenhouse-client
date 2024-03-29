<script setup lang="ts">
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import { useWindowStore, windowActions } from '@/stores/window.store'
import { storeToRefs } from 'pinia'
import { inject, watch } from 'vue'
import IconWindow from '@/icons/IconWindow.vue'
import IconVentilation from '@/icons/IconVentilation.vue'
import InputSwitch from 'primevue/inputswitch'
import { useI18n } from 'vue-i18n'
import { Topics } from '@/plugins/mqtt/mqtt.topics'
const { t } = useI18n()

const store = useWindowStore()

const { opened: state } = storeToRefs(store)

const { windowOpen, windowClose } = store

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const openWindow = () => {
  mqtt?.publish(Topics.window, windowActions.open)
  windowOpen()
}

const closeWindow = () => {
  mqtt?.publish(Topics.window, windowActions.close)
  windowClose()
}
watch(state, (value) => {
  if (value) {
    openWindow()
  } else {
    closeWindow()
  }
})

const windowStateDesc = (state: boolean) => {
  return state ? t('opened') : t('closed')
}
</script>

<template>
  <div class="pb-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <IconWindow class="mr-2" />
        <h1 class="text-2xl text-black/70 dark:text-white font-bold">{{ $t('window') }}</h1>
      </div>
        <InputSwitch v-model="state" />
      </div>
      <h3 v-if="state !== undefined" class="text-black/70 dark:text-neutral-200 font-extralight"> {{ `${$t('window')} ${$t('is')}` }}
      <span class="font-bold pt-1" :class="{ 'text-green-600': state, 'text-red-600': !state }">{{ windowStateDesc(state) }}</span>
      </h3>   
  </div>
</template>
