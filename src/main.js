import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav/TypeNav";
import './api/index'
import store from './store/index'
import './mock/mockSever'
import 'swiper/css/swiper.min.css'
import Banner from "@/components/Banner";
Vue.component('TypeNav',TypeNav);
Vue.component('Banner',Banner)
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus=this
  },
  el:'#app',
  render: h => h(App),
  router,
  store,
})
