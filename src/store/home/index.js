import {getBaseCategoryList, reqGetBannerList, reqGetFloorList} from '@/api' 


export default {
  namespaced: true,
  state: {
    categoryList: [],
    bannerList: [],
    // floor的数据
    floorList: []
  },
  getters: {
    recount(state) {
      return state.count * 2
    }
  },
  actions: {
    async getCategoryList({commit}) {
      const result = await getBaseCategoryList()
      if (result.code == 200) commit('GETCATEGORYLIST', result.data)
    },
    async getBannerList({ commit }) {
      const result = await reqGetBannerList()
      if (result.code == 200) commit('GETBANNERLIST', result.data)
    },
    async getFloorList({ commit }) {
      const result = await reqGetFloorList()
      if (result.code === 200) {
        commit('GETFLOORLIST', result.data)
      }
    }
  },
  mutations: {
    GETCATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList 
    },
    GETBANNERLIST(state, bannerList) {
      state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
      state.floorList = floorList
    }
  }
}