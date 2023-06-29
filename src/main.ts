import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'
import { firebaseApp } from '@/plugins/firebase'
import { VueFire } from 'vuefire'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);
app.use(VueFire, {
  firebaseApp,
})

app.mount('#app')
