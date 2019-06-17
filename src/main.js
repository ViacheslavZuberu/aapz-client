import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/services/i18n/index'
import { store } from '@/store'
import './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
