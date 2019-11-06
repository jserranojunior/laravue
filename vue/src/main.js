import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Auth from '../packages/auth/Auth'


import acl from './acl'

Vue.use(require('vue-script2'))

Vue.config.productionTip = false

new Vue({
 
  router,
  acl,
  store,
  Auth,
  render: h => h(App)
}).$mount('#app')
