import { watch, type Plugin } from 'vue'
import { useMqttClient } from './mqtt.client'
import { Topics } from './mqtt.topics'
import type { IMessage } from './mqtt.types'
import { useMeasurementsStore } from '@/stores/measurements.store'
import { storeToRefs } from 'pinia'
import { mqttClientInjectionKey } from './mqtt.keys'

export const mqtt: Plugin = {
  install: (app) => {
    console.log('MQTT plugin installed')

    const mqtt = useMqttClient()

    app.provide(mqttClientInjectionKey, mqtt)
  
    const { connect, connected, subscribe, messages } = mqtt

    connect()
 
    watch(connected, () => {
      console.log('MQTT client connected');
      subscribe([Topics.temperature, Topics.humidity, Topics.soilMoisture])
    })

    watch(messages, (value: Array<IMessage>) => {

      const index = value.length > 0 ? value.length - 1 : 0
      const lastValue = value[index]

      onMessageReceived(lastValue.topic, lastValue.data)
    },
    {
      deep: true,
    }
    )

    const measurementsStore = useMeasurementsStore()

    const { temperature, humidity, soilMoisture } = storeToRefs(measurementsStore)

    const onMessageReceived = (topic: string, value: number) => {
      switch(topic) { 
        case Topics.humidity: { 
           humidity.value = value
           break
        } 
        case Topics.temperature: { 
           temperature.value = value
           break
        }
        case Topics.soilMoisture: { 
          soilMoisture.value = value;
          break
        } 
        default: { 
           console.log('unknown topic')
           break
        } 
     } 
    }
  }
}