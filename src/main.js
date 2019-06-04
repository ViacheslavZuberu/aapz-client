import Vue from 'vue'
import App from './App.vue'
import i18n from './services/i18n/index'
import router from '@/router'
import { store } from '@/store'
import Vuetify from 'vuetify'

import './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
