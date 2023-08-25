import { connect, MqttClient } from 'mqtt'
import { brokerUrl, clientOptions } from './mqtt.options'
import { Events } from './mqtt.events'
import { useMqttStore } from './mqtt.store'
import { storeToRefs } from 'pinia'

export const useMqtt = () => {

  const mqttStore = useMqttStore()

  const { connected, messages, error, topics } = storeToRefs(mqttStore)

  let client: MqttClient;

  const _connect = () => {

    if (client) {
      return;
    }

    client = connect(brokerUrl, clientOptions)

    client.on(Events.connect, () => connected.value = true)

    client.on(Events.error, e => error.value = e.message)

    client.on(Events.message, messageReceivedCallback)
  }

  const messageReceivedCallback = (topic: string, message: Buffer) => messages.value.push({topic, data: JSON.parse(message.toString())})

  const subscribe = (topic: string | string[]) => {
    topics.value = topics.value.concat(topic);
    client.subscribe(topic)
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
    client.unsubscribe(topic)
  }

  return {
    connected,
    error,
    messages,
    connect: _connect,
    subscribe,
    unsubscribe,
  }
}