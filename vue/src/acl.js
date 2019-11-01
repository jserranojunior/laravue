import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from './router'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'public',
  notfound: {
    path: '/login',
    forwardQueryParams: true,
  },
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule('admin').generate(),
    isPublic: new AclRule('public').or('admin').generate(),
    isUser: new AclRule('user').generate(),
    isLogged: new AclRule('user').and('inside').generate()
  },
  middleware: async acl => {
    let getStore = localStorage.getItem('type');

    if(getStore){
      acl.change(getStore) 
    }else{
      acl.change('public') 
    }
    
 console.log('store')
  }
})