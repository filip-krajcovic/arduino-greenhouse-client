import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
  const _hourOn: Ref<number | undefined> = ref()
  const _minuteOn: Ref<number | undefined> = ref()
  const _hourOff: Ref<number | undefined> = ref()
  const _minuteOff: Ref<number | undefined> = ref()

  const save = (hourOn:number, minuteOn:number, hourOff:number, minuteOff:number) => {
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
