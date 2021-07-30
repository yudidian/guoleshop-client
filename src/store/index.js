import Vuex from 'vuex';
import Vue from "vue";
import home from './home';
import user from './user'
import search from "@/store/search";
Vue.use(Vuex);

const state={

}
const getters={

}
const actions={

}
const mutations={

}
const store=new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules:{
    home,
    user,
    search
  }
});

export default store;
