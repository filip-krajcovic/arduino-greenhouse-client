import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const enum pumpActions {
	on = '1',
	off = '0',
}

const enum pumpState {
	on = 'zapnutá',
	off = 'vypnutá',
}
export const usePumpStore = defineStore('pump', () => {
    const on: Ref<boolean | undefined> = ref()
    const off = computed(() => opened.value === undefined ? undefined : !opened.value)
    const pumpStateDesc = computed(() => {
      if (on.value === true) {
        return pumpState.on
        
      } else if (on.value === false) {
        return pumpState.off

      } else {
        return undefined
      }
     })
  
    const pumpOn = () => on.value = true
  
    const pumpOff = () => on.value = false
  
    return {
        on,
        off,
        pumpStateDesc,
        pumpOn,
        pumpOff,
    }
  })