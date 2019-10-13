import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Auth from '../packages/auth/Auth'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false



new Vue({
  router,
  store,
  Auth,
  vuetify,
  render: h => h(App)
}).$mount('#app')
