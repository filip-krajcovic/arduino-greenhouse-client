import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPump } from '@/services/pump.interface'
import { getLastPumpActivity } from '@/services/pump.service'

export const enum pumpActions {
  on = '1',
  off = '0',
}

const enum pumpState {
  on = 'zapnutá',
  off = 'vypnutá',
}
export const usePumpStore = defineStore('pump', () => {
  const lastState: Ref<IPump | undefined> = ref()
  const on: Ref<boolean | undefined> = ref()
  const off = computed(() => (on.value === undefined ? undefined : !on.value))
  const pumpStateDesc = computed(() => {
    if (on.value === true) {
      return pumpState.on
    } else if (on.value === false) {
      return pumpState.off
    } else {
      return undefined
    }
  })

  const pumpOn = () => {
    on.value = true
    const state: IPump = {
      state: true,
      timestamp: new Date(),
    }
    lastState.value = state
  }

  const pumpOff = () => {
    on.value = false
    const state: IPump = {
      state: false,
      timestamp: new Date(),
    }
    lastState.value = state
  }

  const fetchLastPumpActivity = async () => {
    const pumpActivity = await getLastPumpActivity()
    lastState.value = pumpActivity && pumpActivity.length === 1 ? pumpActivity[0] : undefined
  }

  return {
    on,
    off,
    pumpStateDesc,
    lastState,
    pumpOn,
    pumpOff,
    fetchLastPumpActivity,
  }
})
