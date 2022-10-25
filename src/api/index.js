import request from "@/utils/request";
import mockRequest from '@/utils/mockRequest'

export const getBaseCategoryList = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

//获取banner数据
export const reqGetBannerList = () => mockRequest.get('/banner')
//获取floor数据
export const reqGetFloorList = () => mockRequest.get('/floor')
//获取search的数据
export const reqGetSearchInfo = (params) => request({
  url: '/list',
  method: 'post',
  data: params
})