import { ref, watch, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useMqtt } from '../modules/mqtt.module'

enum Topics {
  humidity = 'humidity',
  temperature = 'temperature',
  moisure_soil = 'moisure_soil',
}

export const useMqttStore = defineStore('mqtt', () => {

  const humidity: Ref<number | undefined> = ref()
  const temperature: Ref<number | undefined> = ref()
  const moisure_soil: Ref<number | undefined> = ref()

  const messageReceivedCallback = (topic: string, value: number) => {
    switch(topic) { 
      case Topics.humidity: { 
         humidity.value = value
         break
      } 
      case Topics.temperature: { 
         temperature.value = value
         break
      }
      case Topics.moisure_soil: { 
        moisure_soil.value = value;
        break
      } 
      default: { 
         console.log('unknown topic')
         break
      } 
   } 
  }

  const { connected, subscribe, messages } = useMqtt({ messageReceivedCallback })

  watch(connected, value => {
    subscribe([Topics.temperature, Topics.humidity, Topics.moisure_soil])
  })

  return {
    humidity,
    temperature,
    moisure_soil,
    messages,
  }
})
