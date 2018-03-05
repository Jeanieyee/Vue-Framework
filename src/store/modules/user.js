import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from 'js-md5'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    email: '',
    roles: [],
    roleName: ''
  },

  mutations: {
    // SET_TOKEN: (state, token) => {
    //   state.token = token
    // },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_ROLE_NAME: (state, roleName) => {
      state.roleName = roleName
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      // return new Promise((resolve, reject) => {
      //   login(username, md5(userInfo.password).toUpperCase()).then(response => {
      //     // const data = response.data;
      //     // setToken(data.token);
      //     // commit('SET_TOKEN', data.token);
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   getInfo().then(response => {
      //     const data = response.data.user
      //     commit('SET_NAME', data.userName)
      //     commit('SET_MOBILE', data.mobile)
      //     commit('SET_ROLE_NAME', data.roleName)
      //     commit('SET_EMAIL', data.email)
      //     commit('SET_ROLES', data.roleName.split(','))
      //     // commit('SET_AVATAR', data.avatar)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 登出
    LogOut({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   logout().then(() => {
      //     // commit('SET_TOKEN', '')
      //     commit('SET_ROLES', [])
      //     removeToken()
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
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

export default user
