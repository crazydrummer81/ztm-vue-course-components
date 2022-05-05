import { createApp } from 'vue'
import App from './App.vue'

window.vm = createApp(App)

window.vm.mount('#app')
