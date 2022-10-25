import { reqGetSearchInfo } from "@/api"
const state = {
  searchList: {}
}
const actions = {
  async getSearchList ({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    console.log(result.data, 'data');
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}