import { request } from "@/http/axios"

/** 获取验证码 */
export function getGoodsListApi() {
  return request<ApiResponseData<any>>({
    url: "/plan/list",
    method: "post",
  })
}