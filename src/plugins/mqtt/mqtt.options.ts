import type { IClientOptions } from 'mqtt'

export const brokerUrl = import.meta.env.VITE_MQTT_BROKER_URL

const path = import.meta.env.VITE_MQTT_PATH
const port = import.meta.env.VITE_MQTT_PORT
const protocol = import.meta.env.VITE_MQTT_PROTOCOL
const username = import.meta.env.VITE_MQTT_USERNAME
const password = import.meta.env.VITE_MQTT_PASSWORD
const clientId = import.meta.env.VITE_MQTT_CLIENT_ID

export const clientOptions: IClientOptions = {
  path,
  port,
  protocol,
  username,
  password,
  clientId,
}
