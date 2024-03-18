import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/plugins/router'
import { mqtt } from '@/plugins/mqtt'
import { vueKeycloak } from '@baloise/vue-keycloak'
import { observeAuth } from './modules/iam/authentication'
import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'
import { createI18n } from 'vue-i18n'
import messages from './i18n/messages'
import { i18nOptions } from '@/plugins/i18n'
import timeago from 'vue-timeago3'

const dev = import.meta.env.DEV
const devSuffix = dev ? '.dev' : ''

const app = createApp(App)

const { locale } = i18nOptions

export const i18n = createI18n({
  locale,
  fallbackLocale: 'en-US',
  messages,
})

app.use(createPinia())
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
})
app.use(router)
app.use(i18n)
app.use(timeago)
app.use(mqtt)
app.use(vueKeycloak, `/keycloak${devSuffix}.json`)
observeAuth()

app.mount('#app')
