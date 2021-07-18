//接口请求函数文件
//每一个接口对应里面一个相应的函数，需要获取数据就调用这个接口
import req from './ajax'
export const getCategoryList=()=>{
  return req({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
console.log(getCategoryList());
