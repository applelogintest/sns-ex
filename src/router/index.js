import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Success from '@/pages/Success'
import Auth from '@/pages/Auth'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
