import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Test from '@/components/Test.vue'
import User from '@/views/User.vue'
import Register from '@/views/Register.vue'
import Events from '@/views/Events.vue'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home-page',
      name: 'user',
      component: User
    },
    {
      path: '/events',
      name: 'event',
      component: Events
    }
  ]
})
