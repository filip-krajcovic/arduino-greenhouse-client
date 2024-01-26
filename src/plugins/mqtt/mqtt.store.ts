import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { IMessage } from './mqtt.types'

export const useMqttStore = defineStore('mqtt', () => {
  const connected: Ref<boolean> = ref(false)
  const error: Ref<string | undefined> = ref()
  const messages: Ref<Array<IMessage>> = ref([])
  const topics: Ref<Array<string>> = ref([])

  return {
    connected,
    error,
    messages,
    topics,
  }
})
