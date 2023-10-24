import { createApp } from 'vue'
import App from './App.vue'
import store from '/src/lib/store.js'
import router from '/src/router/index.js'

createApp(App).use(store).use(router).mount('#app')
