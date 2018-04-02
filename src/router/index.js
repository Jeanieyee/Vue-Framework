import Vue from 'vue'
import i18n from '@/i18n'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)
const lang = i18n.messages[i18n.locale]
/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: {title: lang.Home},
    children: [
      {path: 'home', component: _import('home/index'), meta: {title: lang.Home}}
    ]
  }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {path: '*', redirect: '/404', component: _import('404'), hidden: true}
]
