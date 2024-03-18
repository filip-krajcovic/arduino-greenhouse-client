import { API } from '@/constants'
import { callApi } from './api.service'
import type { IMeasurement, ITemperature, IHumidity, ISoilMoisture } from './measurement.interface'

export const getMeasurements = async (
  skip: number,
  limit: number
): Promise<Array<IMeasurement>> => {
  return callApi<Array<IMeasurement>>(
    `${API.baseUrl}/${API.messagesEndpoint}?skip=${skip}&limit=${limit}`
  )
}

export const getMeasurementsCount = async (): Promise<number> => {
  return callApi<number>(`${API.baseUrl}/${API.messagesEndpoint}/count`)
}

export const getLastTemperature = async (): Promise<Array<ITemperature>> => {
  return await callApi<Array<ITemperature>>(`${API.baseUrl}/${API.temperatureEndpoint}?limit=1`)
}

export const getLastHumidity = async (): Promise<Array<IHumidity>> => {
  return await callApi<Array<IHumidity>>(`${API.baseUrl}/${API.humidityEndpoint}?limit=1`)
}

export const getLastSoilMoisture = async (): Promise<Array<ISoilMoisture>> => {
  return await callApi<Array<ISoilMoisture>>(`${API.baseUrl}/${API.soilMoistureEndpoint}?limit=1`)
}
