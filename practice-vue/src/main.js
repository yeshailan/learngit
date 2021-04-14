// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

//非父子传值的空实例；
Vue.prototype.$event = new Vue();
Vue.prototype.$axios = axios;

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: { App },
  template: '<App/>'
})
