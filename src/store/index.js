import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import enums from './modules/enums'
import lang from './modules/lang'

import getters from './getters'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    user,
    permission,
    enums,
    lang
  },
  getters
})

export default store
