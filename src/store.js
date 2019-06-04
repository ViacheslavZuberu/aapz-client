import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userdata: null,
    username: null,
    password: null
  },
  getters: {
    TOKEN: state => {
      if (state.userdata) {
        return state.userdata.token
      }
    },
    USER: state => state.userdata,
    ROLE: state => {
      if (state.userdata) {
        return state.userdata.role
      }
    },
    USERNAME: state => state.username,
    PASSWORD: state => state.password,
    LOGGED_IN: state => !(state.userdata === null)
  },
  mutations: {
    SET_USER: (state, user) => {
      state.userdata = user
    },
    SET_USERS: (state, users) => {
      state.users = users
    },
    SET_CREDENTIALS: (state, creds) => {
      state.username = creds.username
      state.password = creds.password
    },
    SET_EVENTS: (state, events) => {
      state.events = events
    },
    CLEAR_FIELDS: state => {
      state.userdata = null
      state.username = null
      state.password = null
    }
  },
  actions: {
    logout(context) {
      context.commit('CLEAR_FIELDS')
    }
  }
})
