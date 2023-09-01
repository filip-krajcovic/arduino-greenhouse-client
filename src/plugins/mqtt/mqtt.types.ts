import type { Ref } from "vue"

export type IMessage = {
  topic: string
  data: any
}

export type IMqttClient = {
  connected: Ref<boolean>,
  error: Ref<string | undefined>
  messages: Ref<Array<IMessage>>
  connect: Function,
  subscribe: Function,
  unsubscribe: Function,
  publish: Function,
}