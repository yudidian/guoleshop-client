import {getList} from '../api/index'
const state={
  list: {}
}
const getters={
  attrsList(state){
    return state.list.attrsList||[]
  },
  goodsList(state){
    return state.list.goodsList||[]
  },
  trademarkList(state){
    return state.list.trademarkList||[]
  }
}
const actions={
  async list({commit},searchParams){
    const result=await getList(searchParams)
    if (result.code===200){
      commit('LIST',result.data)
    }
  }
}
const mutations={
  LIST(state,list){
    state.list=list
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
