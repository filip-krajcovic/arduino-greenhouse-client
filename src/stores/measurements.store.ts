import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getLastHumidity, getLastSoilMoisture, getLastTemperature, getMeasurements } from '@/services/measurement.service';
import type { IHumidity, IMeasurement, ISoilMoisture, ITemperature } from '@/services/measurement.interface';

export const useMeasurementsStore = defineStore('measurements', () => {

  const measurements: Ref<Array<IMeasurement>> = ref([])
  const temperature: Ref<ITemperature | undefined> = ref()
  const humidity: Ref<IHumidity | undefined> = ref()
  const soilMoisture: Ref<ISoilMoisture | undefined> = ref()

  const skip: Ref<number> = ref(0)
  const limit: Ref<number> = ref(20)

  const fetchMeasurements = async () => {
    measurements.value = await getMeasurements(skip.value, limit.value)
  }

  const fetchLastTemperature = async () => {
    temperature.value = await getLastTemperature()
  }

  const fetchLastHumidity = async () => {
    humidity.value = await getLastHumidity()
  }

  const fetchLastSoilMoisture = async () => {
    soilMoisture.value = await getLastSoilMoisture()
  }

  return {
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
