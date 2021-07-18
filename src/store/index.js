import Vuex from 'vuex';
import Vue from "vue";
import home from './home';
import user from './user'
Vue.use(Vuex);

const state={

}
const getters={

}
const actions={

}
const mutations={

}
const store=new Vuex({
  state,
  getters,
  actions,
  mutations,
  module:{
    home,
    user
  }
});

export default store;
