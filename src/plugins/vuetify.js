import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/services/i18n/index'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
