import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getLastHumidity,
  getLastSoilMoisture,
  getLastTemperature,
  getMeasurements,
  getMeasurementsCount,
} from '@/services/measurement.service'
import type {
  IHumidity,
  IMeasurement,
  ISoilMoisture,
  ITemperature,
} from '@/services/measurement.interface'

export const useMeasurementsStore = defineStore('measurements', () => {
  const _measurementsCount: Ref<number | undefined> = ref()
  const measurements: Ref<Array<IMeasurement>> = ref([])
  const temperature: Ref<ITemperature | undefined> = ref()
  const humidity: Ref<IHumidity | undefined> = ref()
  const soilMoisture: Ref<ISoilMoisture | undefined> = ref()

  const skip: Ref<number> = ref(0)
  const limit: Ref<number> = ref(20)

  const fetchMeasurements = async () => {
    measurements.value = await getMeasurements(skip.value, limit.value)
  }

  const measurementsCount = computed(async () => {
    _measurementsCount.value = _measurementsCount.value || (await getMeasurementsCount())
    return _measurementsCount.value
  })

  const fetchLastTemperature = async () => {
    const temperatures = await getLastTemperature()
    temperature.value = temperatures && temperatures.length === 1 ? temperatures[0] : undefined
  }

  const fetchLastHumidity = async () => {
    const humidities = await getLastHumidity()
    humidity.value = humidities && humidities.length === 1 ? humidities[0] : undefined
  }

  const fetchLastSoilMoisture = async () => {
    const soilMoistures = await getLastSoilMoisture()
    soilMoisture.value = soilMoistures && soilMoistures.length === 1 ? soilMoistures[0] : undefined
  }

  return {
    measurementsCount,
    measurements,
    temperature,
    humidity,
    soilMoisture,
    skip,
    limit,
    fetchMeasurements,
    fetchLastTemperature,
    fetchLastHumidity,
    fetchLastSoilMoisture,
  }
})
