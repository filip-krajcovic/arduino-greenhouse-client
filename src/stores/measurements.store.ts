import { computed, reactive, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getLastHumidity, getLastSoilMoisture, getLastTemperature, getMeasurements } from '@/services/measurement.service';
import type { IMeasurement } from '@/services/measurement.interface';

export const useMeasurementsStore = defineStore('measurements', () => {

  const measurements: Ref<Array<IMeasurement>> = ref([])
  const temperature: Ref<number | undefined> = ref()
  const humidity: Ref<number | undefined> = ref()
  const soilMoisture: Ref<number | undefined> = ref()

  const fetchMeasurements = async () => {
    measurements.value = await getMeasurements()
  }

  const fetchLastTemperature = async () => {
    console.log('fetchLastTemperature')
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
    fetchMeasurements,
    fetchLastTemperature,
    fetchLastHumidity,
    fetchLastSoilMoisture,
  }
})
