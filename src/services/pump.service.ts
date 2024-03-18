import { API } from '@/constants'
import { callApi } from './api.service'
import type { IPump } from './pump.interface'

export const getLastPumpActivity = async (): Promise<Array<IPump>> => {
  return await callApi<Array<IPump>>(`${API.baseUrl}/${API.pumpEndpoint}?limit=1`)
}
