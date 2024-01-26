import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const enum windowActions {
	open = '1',
	close = '0',
}

const enum windowState {
	opened = 'opened',
	closed = 'closed',
}

export const useWindowStore = defineStore('window', () => {
  const opened: Ref<boolean | undefined> = ref()
  const closed = computed(() => opened.value === undefined ? undefined : !opened.value)
  const windowStateDesc = computed(() => {
    if (opened.value === true) {
      return windowState.opened
      
    } else if (opened.value === false) {
      return windowState.closed

    } else {
      return undefined
    }
   })

  const windowOpen = () => opened.value = true

  const windowClose = () => opened.value = false

  return {
    opened,
    closed,
    windowStateDesc,
    windowOpen,
    windowClose,
  }
})
