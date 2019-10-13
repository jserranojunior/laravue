import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../src/components/auth/VuexAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Auth
  }
})
