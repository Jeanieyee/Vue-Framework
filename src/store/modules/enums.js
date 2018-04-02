import enumsList from '@/utils/enums'
const enums = {
  state: {
    enumsList: enumsList
  },
  mutations: {
    GET_ENUMS: (state,data) => {
      state.enumsList=data;
    }
  },
  actions: {
    GetEnums: ({ commit }, data) => {
      commit('GET_ENUMS',data)
    }
  }
}

export default enums
