import { API } from "@/constants"
import { callApi } from "./api.service"
import type { IHumidity, IMeasurement, ISoilMoisture, ITemperature } from "./measurement.interface"


export const getMeasurements = async (): Promise<Array<IMeasurement>> => {
  return callApi<Array<IMeasurement>>(`${API.baseUrl}/${API.messagesEndpoint}`)
}

export const getLastTemperature = async (): Promise<number> => {
  const response = await callApi<ITemperature>(`${API.baseUrl}/${API.temperatureEndpoint}/last`)
  return response.temperature
}

export const getLastHumidity = async (): Promise<number> => {
  const response = await callApi<IHumidity>(`${API.baseUrl}/${API.humidityEndpoint}/last`)
  return response.humidity
}

export const getLastSoilMoisture = async (): Promise<number> => {
  const response = await callApi<ISoilMoisture>(`${API.baseUrl}/${API.soilMoistureEndpoint}/last`)
  return response.soilMoisture
}