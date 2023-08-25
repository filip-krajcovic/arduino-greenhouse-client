import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/plugins/router'
import { mqtt } from '@/plugins/mqtt'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mqtt);

app.mount('#app')
