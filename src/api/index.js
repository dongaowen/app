import request from "@/utils/request";

export const getBaseCategoryList = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}