import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const enum deviceAction {
  on = '1',
  off = '0',
}

const enum deviceState {
  on = 'online',
  off = 'offline',
}

export const useDeviceStore = defineStore('device', () => {
  const on: Ref<boolean | undefined> = ref()
  const off = computed(() => (on.value === undefined ? undefined : !on.value))
  const deviceStateDesc = computed(() => {
    if (on.value === true) {
      return deviceState.on
    } else if (on.value === false) {
      return deviceState.off
    } else {
      return undefined
    }
  })

  const statusOn = () => (on.value = true)

  const statusOff = () => (on.value = false)

  return {
    on,
    off,
    deviceStateDesc,
    statusOn,
    statusOff,
  }
})
