import { watch, type Plugin } from 'vue'
import { useMqttClient } from './mqtt.client'
import { Topics } from './mqtt.topics'
import type { IMessage } from './mqtt.types'
import { useMeasurementsStore } from '@/stores/measurements.store'
import { useWindowStore } from '@/stores/window.store'
import { useLightsStore } from '@/stores/lights.store';
import { useStatusStore } from '@/stores/status.store';
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
      subscribe([Topics.temperature, Topics.humidity, Topics.soilMoisture, Topics.window, Topics.lights, Topics.status])
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

    const windowStore = useWindowStore()

    const lightsStore = useLightsStore()

    const statusStore = useStatusStore()

    const { lightsOn, lightsOff } = lightsStore
    const { windowOpen, windowClose } = windowStore
    const { statusOn, statusOff } = statusStore

    const onMessageReceived = (topic: string, value: number) => {
      switch(topic) { 
        case Topics.humidity: { 
           humidity.value = { humidity: value, timestamp: new Date() }
           break
        } 
        case Topics.temperature: { 
           temperature.value = { temperature: value, timestamp: new Date() }
           break
        }
        case Topics.soilMoisture: { 
          soilMoisture.value = { soilMoisture: value, timestamp: new Date() };
          break
        }
        case Topics.window: { 
          if (value === 1) {
            windowOpen()
          } else if (value === 0) {
            windowClose()
          }
          break
        }
        case Topics.lights: {
          if(value === 1){
            lightsOn()
          } else if(value === 0){
            lightsOff()
          }
          break
        }
        case Topics.status: {
          if (value == 1){
            statusOn()
          } else if (value == 0){
            statusOff()
          }
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