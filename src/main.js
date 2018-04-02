import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

import '@/permission' // 权限
import i18n from './i18n'
import vueFilter from './utils/filter'
import components from '@/components'

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`${name}`, components[key])
})

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

