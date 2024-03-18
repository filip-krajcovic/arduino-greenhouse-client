import { API } from '@/constants'
import { callApi } from './api.service'
import type { ISchedule } from './schedule.interface'

export const getSchedule = async (): Promise<Array<ISchedule>> => {
  return await callApi<Array<ISchedule>>(`${API.baseUrl}/${API.scheduleEndpoint}?limit=1`)
}
