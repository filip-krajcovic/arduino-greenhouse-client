import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/plugins/router'
import { mqtt } from '@/plugins/mqtt'
import { vueKeycloak } from '@baloise/vue-keycloak'
import { observeAuth } from './modules/iam/authentication'
import PrimeVue from 'primevue/config'
import './assets/main.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

const dev = import.meta.env.DEV
const devSuffix = dev ? '.dev' : ''

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.use(mqtt)
app.use(vueKeycloak, `/keycloak${devSuffix}.json`)
observeAuth()

app.mount('#app')
