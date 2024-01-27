<script setup lang="ts">
import { ref, watch, inject } from 'vue'
import { useTimerStore } from '@/stores/timer.store'
import { mqttClientInjectionKey } from '@/plugins/mqtt/mqtt.keys'
import type { IMqttClient } from '@/plugins/mqtt/mqtt.types'
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask'
import { useScheduleStore } from '@/stores/schedule.store'
import type { ISchedule } from '@/services/schedule.interface'

const mqtt = inject<IMqttClient>(mqttClientInjectionKey)

const timeOn = ref()
const timeOff = ref()

const hourOn = ref()
const minuteOn = ref()
const hourOff = ref()
const minuteOff = ref()

watch(timeOn, (value: string) => {
  console.log(value)
  const tokens = value.split(':')
  if (tokens.length === 2) {
    hourOn.value = tokens[0]
    minuteOn.value = tokens[1]
  }
})
watch(timeOff, (value: string) => {
  console.log(value)
  const tokens = value.split(':')
  if (tokens.length == 2) {
    hourOff.value = tokens[0]
    minuteOff.value = tokens[1]
  }
})

const { save, read } = useTimerStore()

const mapFromStore = (source: ISchedule) => {
  if (source) {
    hourOn.value = source.hourOn
    minuteOn.value = source.minuteOn
    hourOff.value = source.hourOff
    minuteOff.value = source.minuteOff
    if (hourOn.value && minuteOn.value) {
      timeOn.value = hourOn.value + ':' + minuteOn.value
    }
    if (hourOff.value && minuteOff.value) {
      timeOff.value = hourOff.value + ':' + minuteOff.value
    }
  }
}

const storeData = read()

mapFromStore(storeData)

const saveData = () => {
  save(hourOn.value, minuteOn.value, hourOff.value, minuteOff.value)
  mqtt?.publish('arduino/timer', JSON.stringify(read()))
}

const scheduleStore = useScheduleStore()


const { fetchSchedule } = scheduleStore

if (!(timeOn.value && timeOff.value)) {
  fetchSchedule().then(lastValue => {
    if (lastValue) {
      mapFromStore(lastValue)
    }
  })
}


</script>

<template>
  <div class="flex justify-between">
    <h1 class="pt-10 text-2xl">{{ $t('scheduler') }}</h1>
  </div>
  <div class="grid grid-cols-2 gap-3 py-8">
    <div class="flex flex-col">
      <label class="text-xl">{{ $t('turnOnTime') }}</label>
      <InputMask
        class="w-24 text-lg dark:bg-black mt-2 px-4"
        v-model.lazy="timeOn"
        placeholder="00:00"
        mask="99:99"
        slotChar="hh:mm"
      />
    </div>
    <div class="flex flex-col">
      <label class="text-xl">{{ $t('turnOffTime') }}</label>
      <InputMask
        class="w-24 text-lg dark:bg-black mt-2 px-4"
        v-model.lazy="timeOff"
        placeholder="00:00"
        mask="99:99"
        slotChar="hh:mm"
      />
    </div>
  </div>
  <div class="pt-4 flex flex-col sm:flex-row">
    <div v-if="hourOn && minuteOn">
      {{ $t('lightsTurnOnFrom') }}
      <span class="text-cyan-800 font-semibold mr-1"> {{ hourOn }}:{{ minuteOn }}</span>
    </div>
    <div v-if="hourOff && minuteOff">
      {{ $t('lightsTurnOffBy') }}
      <span class="text-cyan-800 font-semibold">{{ hourOff }}:{{ minuteOff }}</span>
    </div>
  </div>
  <div class="flex items-center mt-4">
    <button @click="saveData" class="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full sm:w-auto">
      {{ $t('save') }}
    </button>
  </div>
</template>
