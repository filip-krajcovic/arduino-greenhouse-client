import { watch, type Plugin } from 'vue'
import { useMqttClient } from './mqtt.client'
import { Topics } from './mqtt.topics'
import { mqttClientInjectionKey } from './mqtt.keys'

export const mqtt: Plugin = {
  install: (app) => {
    console.log('MQTT plugin installed')

    const mqtt = useMqttClient()

    app.provide(mqttClientInjectionKey, mqtt)

    const { connect, connected, subscribe } = mqtt

    connect()

    watch(connected, () => {
      console.log('MQTT client connected')
      subscribe([
        Topics.temperature,
        Topics.humidity,
        Topics.soilMoisture,
        Topics.status,
      ])
    })
  },
}
