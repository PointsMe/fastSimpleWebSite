import { request } from "@/http/axios"

/** 获取验证码 */
export function getGoodsListApi() {
  return request<ApiResponseData<any>>({
    url: "/plan/list",
    method: "post",
  })
}

export function getGoodsDetailApi(id:string) {
    return request<ApiResponseData<any>>({
      url: `/plan/detail?id=${id}`,
      method: "post",
    })
  }