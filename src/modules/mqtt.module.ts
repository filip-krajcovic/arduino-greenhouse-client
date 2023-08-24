import { connect } from 'mqtt'
import { ref, type Ref } from 'vue'
import { brokerUrl, clientOptions, type IModuleOptions } from './mqtt.options'
import { Events } from './mqtt.events'

export const useMqtt = (options: IModuleOptions) => {

  const connected: Ref<boolean> = ref(false)
  const error: Ref<string | undefined> = ref()
  const messages: Ref<Record<string, any>> = ref([])
  const topics: Ref<string[]> = ref([]);

  const defaultCallback = (topic: string, message: any) => messages.value.push({topic, message})

  const messageReceivedCallback = options.messageReceivedCallback ?? defaultCallback

  const client = connect(brokerUrl, clientOptions)

  client.on(Events.connect, () => connected.value = true)

  client.on(Events.error, e => error.value = e.message)

  client.on(Events.message, (topic, m) => {
    console.log(`m: ${m}`);
    const message = Number.parseFloat(m.toString())
    messages.value.push({topic, message })
    messageReceivedCallback(topic, message)
  });

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
    subscribe,
    unsubscribe,
  }
}