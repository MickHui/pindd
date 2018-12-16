// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import LyTab from 'ly-tab'
import store from './store'


fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(LyTab)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
