import { connect, MqttClient } from 'mqtt'
import { brokerUrl, clientOptions } from './mqtt.options'
import { Events } from './mqtt.events'
import { useMqttStore } from './mqtt.store'
import { storeToRefs } from 'pinia'
import type { IMqttClient } from './mqtt.types'
import { useMeasurementsStore } from '@/stores/measurements.store'
import { useWindowStore } from '@/stores/window.store'
import { useLightsStore } from '@/stores/lights.store'
import { useDeviceStore } from '@/stores/device.store'
import { usePumpStore } from '@/stores/pump.store'
import { Topics } from './mqtt.topics'

export const useMqttClient = (): IMqttClient => {
  const mqttStore = useMqttStore()

  const { connected, messages, error, topics } = storeToRefs(mqttStore)

  let client: MqttClient

  const _connect = () => {
    if (client) {
      return
    }

    client = connect(brokerUrl, clientOptions)

    client.on(Events.connect, () => (connected.value = true))

    client.on(Events.error, (e) => (error.value = e.message))

    client.on(Events.message, messageReceivedCallback)
  }

  const messageReceivedCallback = (topic: string, message: Buffer) => {
    console.log(`topic ${topic} message: ${message.toString()}`);

    const measurementsStore = useMeasurementsStore()
    const { temperature, humidity, soilMoisture } = storeToRefs(measurementsStore)

    const windowStore = useWindowStore()

    const lightsStore = useLightsStore()

    const deviceStore = useDeviceStore()

    const pumpStore = usePumpStore()

    const { lightsOn, lightsOff } = lightsStore
    const { windowOpen, windowClose } = windowStore
    const { statusOn, statusOff } = deviceStore
    const { pumpOn, pumpOff } = pumpStore

    const onMessageReceived = (topic: string, value: number) => {
      switch (topic) {
        case Topics.humidity: {
          humidity.value = { humidity: value, timestamp: new Date() }
          break
        }
        case Topics.temperature: {
          temperature.value = { temperature: value, timestamp: new Date() }
          break
        }
        case Topics.soilMoisture: {
          soilMoisture.value = { soilMoisture: value, timestamp: new Date() }
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
          if (value === 1) {
            lightsOn()
          } else if (value === 0) {
            lightsOff()
          }
          break
        }
        case Topics.status: {
          if (value == 1) {
            statusOn()
          } else if (value == 0) {
            statusOff()
          }
          break
        }
        case Topics.pump: {
          if (value == 1) {
            pumpOn()
          } else if (value == 0) {
            pumpOff()
          }
          break
        }
        default: {
          console.log('unknown topic')
          break
        }
      }
    }

    const val = +message.toString()
    onMessageReceived(topic, val)

  }

  const subscribe = (topic: string | string[]) => {
    topics.value = topics.value.concat(topic)
    client.subscribeAsync(topic)//, { qos: 0 })
  }

  const unsubscribe = (topic: string | string[]) => {
    if (Array.isArray(topic)) {
      topic.forEach((value, i) => {
        const index = topics.value.indexOf(value)
        if (index !== -1) {
          topics.value.splice(index, 1)
        }
      })
    } else {
      topics.value.splice(topics.value.indexOf(topic), 1)
    }
    client.unsubscribeAsync(topic)
  }

  const publish = (topic: string, message: string | Buffer) => {
    client.publishAsync(topic, message, { qos: 0 })
  }

  return {
    connected,
    error,
    messages,
    connect: _connect,
    subscribe,
    unsubscribe,
    publish,
  }
}
