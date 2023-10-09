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
  const off = computed(() => { /*TODO*/ })
  const lightsStateDesc = computed(() => {
    /*TODO*/
   })

  const lightsOn = () => { /*TODO*/ }

  const lightsOff = () => { /*TODO*/ }

  return {
    on,
    off,
    lightsStateDesc,
    lightsOn,
    lightsOff,
  }
})
