import { API } from "@/constants"
import { callApi } from "./api.service"
import type { IMeasurement, ITemperature, IHumidity, ISoilMoisture } from "./measurement.interface"


export const getMeasurements = async (): Promise<Array<IMeasurement>> => {
  return callApi<Array<IMeasurement>>(`${API.baseUrl}/${API.messagesEndpoint}`)
}

export const getLastTemperature = async (): Promise<ITemperature> => {
  return await callApi<ITemperature>(`${API.baseUrl}/${API.temperatureEndpoint}/last`)
}

export const getLastHumidity = async (): Promise<IHumidity> => {
  return await callApi<IHumidity>(`${API.baseUrl}/${API.humidityEndpoint}/last`)
}

export const getLastSoilMoisture = async (): Promise<ISoilMoisture> => {
  return await callApi<ISoilMoisture>(`${API.baseUrl}/${API.soilMoistureEndpoint}/last`)
}