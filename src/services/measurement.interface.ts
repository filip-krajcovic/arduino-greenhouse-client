export interface IMeasurement {
  humidity?: number
  soilMoisture?: number
  temperature?: number
  timestamp: Date
}

export interface ITemperature {
  temperature: number,
  timestamp: Date,
}

export interface IHumidity {
  humidity: number,
  timestamp: Date,
}

export interface ISoilMoisture {
  soilMoisture: number,
  timestamp: Date,
}