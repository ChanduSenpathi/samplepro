import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import './assets/main.css'
import './assets/custom.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
