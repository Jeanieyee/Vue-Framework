import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from 'js-md5'
import avatar from '@/image/head/default-head.png'
import {login, getInfo, logout} from '@/api/login'
import defaultAvatar from '@/utils/defaultAvatar'

const user = {
  state: {
    accesstoken: getToken(),
    name: '',
    orgName: '',
    avatar: '',
    email: '',
    personId: '',
    permission: [],
    organizeId: '',
    sex: ''
    // roles: [],
    // roleName: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.accesstoken = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ORGNAME: (state, orgName) => {
      state.orgName = orgName
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_PERSON_ID: (state, id) => {
      state.personId = id
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
    },
    SET_ORGANIZE_ID: (state, organizeId) => {
      state.organizeId = organizeId
    }
  },

  actions: {
    // SetToken
    SetToken ({commit}, token) {
      setToken(token)
      commit('SET_TOKEN', token)
    },
    // 登录
    Login({ commit }, formData) {
      const username = formData.username.trim()
      return new Promise((resolve, reject) => {
        login({
          username: username,
          password: md5(formData.password).toUpperCase()
        }).then(response => {
          setToken(response.data.accesstoken)
          commit('SET_TOKEN', response.data.accesstoken)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    CaptchaLogin ({commit}, formData) {
      const username = formData.username.trim()
      return new Promise((resolve, reject) => {
        login({
          username: username,
          captcha: formData.captcha
        }).then(response => {
          setToken(response.data.accesstoken)
          commit('SET_TOKEN', response.data.accesstoken)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          commit('SET_NAME', data.name)
          commit('SET_MOBILE', data.phone)
          commit('SET_EMAIL', data.email)
          commit('SET_PERSON_ID', data.personId)
          commit('SET_AVATAR', data.avatar)
          commit('SET_SEX', data.sex)
          commit('SET_PERMISSION', handleRoutes(response.data.func || []))
          commit('SET_ORGANIZE_ID', data.organizeId)
          commit('SET_ORGNAME', data.organizeName)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

function handleRoutes (rolesTotal) {
  let rolesObject = []
  rolesTotal.map(role => {
    let codeString = role.toString()
    if (codeString.length > 3) {
      rolesObject.push(role)
      rolesObject.push(parseInt(codeString.substr(0, 3)))
    } else {
      rolesObject.push(role)
    }
  })
  rolesObject = [...new Set(rolesObject)]
  return rolesObject
}


export default user
