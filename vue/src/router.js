import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import About from './views/About'
import Dashboard from './views/admin/Dashboard'
import AboutAdmin from './views/admin/About'

// import { AclRule } from 'vue-acl'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/admin/dashboard',
      name: 'admin',
      component: Dashboard,
      meta: {
        rule: 'isAdmin'
      }
      
    },
    {
      path: '/admin/about',
      name: 'about',
      component: AboutAdmin,
      meta: {
        rule: 'isAdmin'
      }
    },

  ]
})
