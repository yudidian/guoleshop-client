import {getCategoryList,bannerList,floorList} from '../api/index'

const state = {
  category: [],
  bannerList:[],
  floorList:[]
}
const getters = {

}
const mutations= {
  REVICE_CATEGORY(state, category) {
       state.category = category;
  },
  REVICE_BANNER(state, banner) {
         state.bannerList = banner;
  },
  REVICE_FLOOR(state, floor) {
           state.floorList = floor;
    },
}
const actions = {
  async getCategory({commit}) {
    const results = await getCategoryList();
    if (results.code === 200) {
      commit('REVICE_CATEGORY', results.data)
    }
  },
  async bannerList({commit}) {
      const results = await bannerList();
      if (results.code === 200) {
        commit('REVICE_BANNER', results.data)
      }
    },
  async floorList({commit}) {
     const results = await floorList();
        if (results.code === 200) {
          commit('REVICE_FLOOR', results.data)
        }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
