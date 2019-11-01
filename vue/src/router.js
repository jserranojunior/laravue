import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import About from './views/About'
import Dashboard from './views/users/Dashboard'

// import { AclRule } from 'vue-acl'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/about',
      name: 'user',
      component: About,
      meta: {
        rule: 'isUser'
      }
    },
    {
      path: '/login',
      name: 'login',      
      component: Login,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/dashboard',
      name: 'admin',
      component: Dashboard,
      meta: {
        rule: 'isAdmin'
      }
      
    },

  ]
})
