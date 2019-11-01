import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Auth from '../packages/auth/Auth'
import vuetify from './plugins/vuetify';

import acl from './acl'

Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (login) {
//       next({
//         name: 'login',
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() 
//   }
// })

// console.log(record.meta)

new Vue({
  router,
  acl,
  store,
  Auth,
  vuetify,
  render: h => h(App)
}).$mount('#app')
