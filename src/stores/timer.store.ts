import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
  const _hourOn: Ref<string | undefined> = ref()
  const _minuteOn: Ref<string | undefined> = ref()
  const _hourOff: Ref<string | undefined> = ref()
  const _minuteOff: Ref<string | undefined> = ref()

  const save = (hourOn: string, minuteOn: string, hourOff: string, minuteOff: string) => {
    _hourOn.value = hourOn
    _minuteOn.value = minuteOn
    _hourOff.value = hourOff
    _minuteOff.value = minuteOff
  }

  const read = () => {
    return {
      hourOn: _hourOn.value,
      minuteOn: _minuteOn.value,
      hourOff: _hourOff.value,
      minuteOff: _minuteOff.value,
    }
  }

  return {
    save,
    read,
  }
})
