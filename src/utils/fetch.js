import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth' // 验权
import { getStore } from '@/utils/index'

let postLang = 'zh_CN'
if (getStore('lang') === 'cn') {
  postLang = 'zh_CN'
} else if (getStore('lang') === 'en') {
  postLang = 'en_US'
} else if (getStore('lang') === 'tw') {
  postLang = 'zh_TW'
}
var params = {}
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // headers: {'Content-Type': 'application/x-www-form-urlencoded', 'language': postLang},
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  timeout: 15000,                  // 请求超时时间
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    params = data
    for (let key in data) {
      let newKey = encodeURIComponent(key)
      // 检查value值 如果值为数组或对象 先转成Json字符串 再传值
      let newValue = ''
      if (typeof data[key] === 'object' && data[key] !== null && data[key] !== undefined) {
        // console.log('监测到对象元素' + key)
        newValue = encodeURIComponent(JSON.stringify(data[key]))
      } else {
        newValue = encodeURIComponent(data[key])
      }
      ret += newKey + '=' + newValue + '&'
    }
    ret = ret.substring(0, ret.length - 1)
    return ret
  }],
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.accesstoken) {
    config.headers['accesstoken'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (res && res.status === undefined) {
      // 国籍、民族
      return response.data
    } else {
      if (res.status !== 'succ') {
        if (!params.hide) {
          Message({
            message: res.message || '系统错误',
            type: 'error',
            duration: 3 * 1000
          })
        }
        if (res.code === 40001) {
          MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {

          })
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        }
        return Promise.reject(response.data)
      } else {
        return response.data
      }
    }

  },
  error => {
    if (!params.hide){
      Message({
        message: error.message || '系统错误',
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(error.message)
  }
);

export default service
