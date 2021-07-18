//对axios的二次封装
import axios from "axios";
//引入nprogress进度条的显示
import Nprogress from "nprogress";
//引入nprogress的css
import 'nprogress/nprogress.css'
//1、配置基础路径和延时时间
const service=axios.create({
  baseURL:'api',
  timeout:20000,
})

//2、配置进度条
// 请求拦截器
service.interceptors.request.use(function (config) {
  Nprogress.start();
  return config;
}, function (error) {
  //失败相应拦截器
  // 一般不使用
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 成功的回调
  Nprogress.done();
  //3、返回的数据不需要在data中获取返回就是需要的数据
  return response.data;
}, function (error) {
  // 失败的回调
  Nprogress.done();
  alert('ajax请求失败'+error.message||'请求错误')
  //4、统一处理请求错误
  return Promise.reject(new Error('请求错误'));
});
export default service;

