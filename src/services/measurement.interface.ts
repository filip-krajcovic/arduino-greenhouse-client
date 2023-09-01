export interface IMeasurement {
  humidity?: number
  soilMoisture?: number
  temperature?: number
  timestamp: Date
}

export interface ITemperature {
  temperature: number
}

export interface IHumidity {
  humidity: number
}

export interface ISoilMoisture {
  soilMoisture: number
}