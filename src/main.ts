import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnnouncer from '@vue-a11y/announcer'
import 'yama-normalize'

createApp(App)
  .use(router)
  .mount('#app')
