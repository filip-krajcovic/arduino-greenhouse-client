import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const enum lightsActions {
  on = '1',
  off = '0',
}

const enum lightsState {
  on = 'zapnuté',
  off = 'vypnuté',
}

export const useLightsStore = defineStore('lights', () => {
  const on: Ref<boolean | undefined> = ref()
  const off = computed(() => (on.value === undefined ? undefined : !on.value))
  const lightsStateDesc = computed(() => {
    if (on.value === true) {
      return lightsState.on
    } else if (on.value === false) {
      return lightsState.off
    } else {
      return undefined
    }
  })

  const lightsOn = () => (on.value = true)

  const lightsOff = () => (on.value = false)

  return {
    on,
    off,
    lightsStateDesc,
    lightsOn,
    lightsOff,
  }
})
