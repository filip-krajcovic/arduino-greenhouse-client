import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const enum statusAction {
    on = "1",
    off = "0",
}

const enum statusState {
    on = "online",
    off = "offline",
}

export const useStatusStore = defineStore('status', () => {
    const on: Ref<boolean | undefined> = ref()
    const off = computed(() => on.value === undefined ? undefined : !on.value )
    const statusStateDesc = computed(() => {
      if (on.value === true){
        return statusState.on
  
      } else if (on.value === false) {
        return statusState.off
  
      } else {
        return undefined
      }
     })

     const statusOn = () => on.value = true

     const statusOff = () => on.value = false

     return {
        on,
        off,statusStateDesc,
        statusOn,
        statusOff,
    }
})