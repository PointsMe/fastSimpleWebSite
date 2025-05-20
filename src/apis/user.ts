import type * as Types from "@/apis/type"
import { request } from "@/http/axios"
import Qs from "qs"
/** 获取当前登录用户详情 */
export function getCurrentUserApi() {
  return request<Types.CurrentUserResponseData>({
    url: "users/me",
    method: "get"
  })
}
/** 获取验证码 */
export function getVerificationCodeApi(data: Types.verificationCodeType) {
  return request<ApiResponseData<string | null>>({
    url: "/verification_code/send",
    method: "post",
    data: data
  })
}
/** 注册 */
export function registerApi(data: Types.registerType) {
  return request<ApiResponseData<any>>({
    url: "/register",
    method: "post",
    data: data
  })
}
/** d登录 */
export function loginApi(data: any) {
  return request<ApiResponseData<any>>({
    url: "/login",
    method: "post",
    data: data
  })
}
/** 修改密码 */
export function forgetPassWordApi(data: any) {
  return request<ApiResponseData<any>>({
    url: "/account/password/forget",
    method: "post",
    data: data
  })
}
/** 获取地址 */
export function getAddressApi(data: any) {
  return request<ApiResponseData<any>>({
    url: "/me/shop/detail",
    method: "post",
    data: Qs.stringify(data),
      headers: {
        // 携带 Token
        // "Authorization": token ? `Bearer ${token}` : undefined,
        "Content-Type": "application/x-www-form-urlencoded"
      },
  })
}
export function getUserDetailApi() {
  return request<ApiResponseData<any>>({
    url: "/me/detail",
    method: "post",
  })
}
