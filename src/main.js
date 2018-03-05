import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon

import '@/permission' // 权限
import i18n from './i18n'
import vueFilter from './utils/filter'

Vue.use(ElementUI)
Vue.use(vueFilter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})

