﻿import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import App from './app.vue'
import './assets/styles/global.styl'

Vue.use(VueRouter)
const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
