import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/firebaseConfig'
// importing styles
import './assets/css/globals.css'
import './assets/css/header.css'
import './assets/css/template.css'
import './assets/css/login.css'
import './assets/css/table.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
