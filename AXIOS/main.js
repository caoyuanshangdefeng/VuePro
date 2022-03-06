import Vue from 'vue'
import App from './App'
import store from './store'


// import { config } from 'vue/types/umd'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

