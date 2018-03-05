import router from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { getToken } from '@/utils/auth' // 验权

// import { getStore } from '@/utils/index' // 验权

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({path: '/'})
  //   } else {
  //     // 设置导航条默认选中
  //     if (store.getters.permission_routers !== undefined) {
  //       store.getters.permission_routers.map((item, index) => {
  //         if (item.children !== undefined) {
  //           item.children.map((child, _index) => {
  //             if (child.childrenHidden === true) {
  //               if (to.matched[to.matched.length - 1].parent.path === item.path + '/' + child.path) {
  //                 store.commit('CHANGE_SLIDER_ACTIVE', to.matched[to.matched.length - 1].parent.path)
  //               }
  //             } else {
  //               if (to.path === item.path + '/' + child.path) {
  //                 store.commit('CHANGE_SLIDER_ACTIVE', to.path)
  //               }
  //             }
  //           })
  //         }
  //       })
  //     }
  //     if (store.getters.roles.length === 0) {
  //       store.dispatch('GetEnums').then(() => {
  //         store.dispatch('GetInfo').then(res => {
  //           // const roles = ['admin']
  //           const roles = res.data.user.roleName.split(',')
  //           store.dispatch('GenerateRoutes', {roles}).then(() => {
  //             router.addRoutes(store.getters.addRouters)
  //             next({...to})
  //           })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   if (to.path === '/login') {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
