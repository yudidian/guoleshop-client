//接口请求函数文件
//每一个接口对应里面一个相应的函数，需要获取数据就调用这个接口
import req from './ajax'
import reqMock from './mockAjax'
export const getCategoryList=()=>{
  return req({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
export  const bannerList=()=>{
  return reqMock({
    url:'/banner',
    method:'get',
  })
}
export  const floorList=()=>{
  return reqMock({
    url:'/floor',
    method:'get',
  })
}
export const getList=(searchParams)=>{
  return req({
    url:'/list',
    method:'post',
    data:searchParams,
  })
}
