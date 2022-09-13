import {getBaseCategoryList} from '@/api' 

export default {
  namespaced: true,
  state: {
    categoryList: [1]
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
    }
  },
  mutations: {
    GETCATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList 
    }
  }
}