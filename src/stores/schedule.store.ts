import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ISchedule } from '@/services/schedule.interface'
import { getSchedule } from '@/services/schedule.service'

export const useScheduleStore = defineStore('schedule', () => {
  const lastState: Ref<ISchedule | undefined> = ref()

  const fetchSchedule = async (): Promise<ISchedule | undefined> => {
    const schedule = await getSchedule()
    lastState.value = schedule?.length === 1 ? schedule[0] : undefined
    return lastState.value
  }

  return {
    lastState,
    fetchSchedule,
  }
})
