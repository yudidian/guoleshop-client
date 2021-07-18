import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Search from '../pages/Search/Search';
Vue.use(VueRouter);
const originPush=VueRouter.prototype.push;
const originReplace=VueRouter.prototype.replace;
VueRouter.prototype.push=function (location,onResolved,onRejected){
  if(onResolved===undefined&&onRejected===undefined){
    //location就是调用的this.$router.push,传递的参数
    //{
        //name:'xxxx',
        //params:{key:this.key}
        //query:{key1:this.key}
    // }
    return originPush.call(this,location).catch(()=>{});
  }else {
    return originPush.call(this,location,onResolved,onRejected);
  }
}
VueRouter.prototype.replace=function (location,onResolved,onRejected){
  if(onResolved===undefined&&onRejected===undefined){
    return originReplace.call(this,location).catch(()=>{});
  }else {
    return originReplace.call(this,location,onResolved,onRejected);
  }
}
const router =new VueRouter({
  routes:[
    {
      path:'/',
      component:Home,
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHide:true,
      },
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHide:true,
      },
    },
    {
      path:'/search',
      component:Search,
      name:'search',
      props(route){
        const {keywords}=route.query;
        return {keywords};
      },
    }
  ]
});
export default router;
