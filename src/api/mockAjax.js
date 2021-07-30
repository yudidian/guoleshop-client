import axios from "axios";
import Nprogress from 'nprogress'

const service=axios.create({
  baseURL:'/mock',
  timeout:10000,
})
service.interceptors.request.use(function (config){
  Nprogress.start();
  return config;
},function (error){
  return Promise.reject(error);
  }
)

service.interceptors.response.use(function (config){
  Nprogress.done();
  return config.data
},function (error){
  Nprogress.done();
  alert(error.message||'请求失败');
  return new Promise.reject(new Error('请求错误'))
})

export default service
